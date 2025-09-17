class CallRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.isRecording = false;
    this.audioContext = null;
    this.audioStream = null;
    this.processor = null;
  }

  async startRecording() {
    try {
      // Request microphone access
      this.audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100
        }
      });

      // Also try to capture tab audio if available
      try {
        const tabStream = await navigator.mediaDevices.getDisplayMedia({
          audio: true,
          video: false
        });
        
        // Combine microphone and tab audio
        const audioContext = new AudioContext();
        const micSource = audioContext.createMediaStreamSource(this.audioStream);
        const tabSource = audioContext.createMediaStreamSource(tabStream);
        
        const destination = audioContext.createMediaStreamDestination();
        micSource.connect(destination);
        tabSource.connect(destination);
        
        this.audioStream = destination.stream;
        this.audioContext = audioContext;
      } catch (tabError) {
        console.log('Tab audio capture not available, using microphone only');
      }

      // Set up MediaRecorder
      this.mediaRecorder = new MediaRecorder(this.audioStream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.processRecording();
      };

      this.mediaRecorder.start(1000); // Collect data every second
      this.isRecording = true;

      console.log('Recording started');
      this.notifyBackground('recording_started');

    } catch (error) {
      console.error('Error starting recording:', error);
      this.notifyBackground('recording_error', { error: error.message });
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.isRecording = false;
      
      // Stop all tracks
      if (this.audioStream) {
        this.audioStream.getTracks().forEach(track => track.stop());
      }
      
      console.log('Recording stopped');
      this.notifyBackground('recording_stopped');
    }
  }

  async processRecording() {
    try {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      
      // Convert to MP3 using LAME.js
      const mp3Blob = await this.convertToMP3(audioBlob);
      
      // Convert to base64 for storage
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1];
        this.notifyBackground('recording_processed', { 
          data: base64Data,
          size: mp3Blob.size,
          duration: this.audioChunks.length // Approximate duration in seconds
        });
      };
      reader.readAsDataURL(mp3Blob);

    } catch (error) {
      console.error('Error processing recording:', error);
      this.notifyBackground('recording_error', { error: error.message });
    }
  }

  async convertToMP3(audioBlob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const arrayBuffer = reader.result;
          const audioContext = new AudioContext();
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
          
          // Convert to WAV first
          const wavBlob = this.audioBufferToWav(audioBuffer);
          
          // Then convert WAV to MP3 using LAME.js
          const wavReader = new FileReader();
          wavReader.onload = () => {
            try {
              // Load LAME.js if not already loaded
              if (typeof lamejs === 'undefined') {
                const script = document.createElement('script');
                script.src = chrome.runtime.getURL('lame.min.js');
                script.onload = () => {
                  this.encodeToMP3(wavReader.result, resolve, reject);
                };
                script.onerror = () => reject(new Error('Failed to load LAME.js'));
                document.head.appendChild(script);
              } else {
                this.encodeToMP3(wavReader.result, resolve, reject);
              }
            } catch (error) {
              reject(error);
            }
          };
          wavReader.readAsArrayBuffer(wavBlob);
          
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(audioBlob);
    });
  }

  encodeToMP3(arrayBuffer, resolve, reject) {
    try {
      const wav = lamejs.WavHeader.readHeader(new DataView(arrayBuffer));
      const samples = new Int16Array(arrayBuffer, wav.dataOffset, wav.dataLen / 2);
      
      const mp3encoder = new lamejs.Mp3Encoder(wav.channels, wav.sampleRate, 128);
      const mp3Data = [];
      
      const blockSize = 1152;
      for (let i = 0; i < samples.length; i += blockSize) {
        const sampleChunk = samples.subarray(i, i + blockSize);
        const mp3buf = mp3encoder.encodeBuffer(sampleChunk);
        if (mp3buf.length > 0) {
          mp3Data.push(mp3buf);
        }
      }
      
      const mp3buf = mp3encoder.flush();
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }
      
      const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
      resolve(mp3Blob);
      
    } catch (error) {
      reject(error);
    }
  }

  audioBufferToWav(buffer) {
    const length = buffer.length;
    const numberOfChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2);
    const view = new DataView(arrayBuffer);
    
    // WAV header
    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length * numberOfChannels * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numberOfChannels * 2, true);
    view.setUint16(32, numberOfChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, length * numberOfChannels * 2, true);
    
    // Convert float samples to 16-bit PCM
    let offset = 44;
    for (let i = 0; i < length; i++) {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
      }
    }
    
    return new Blob([arrayBuffer], { type: 'audio/wav' });
  }

  notifyBackground(type, data = {}) {
    chrome.runtime.sendMessage({
      type: type,
      data: data
    });
  }
}

// Initialize the recorder when the page loads
if (typeof window.callRecorder === 'undefined') {
  window.callRecorder = new CallRecorder();
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startRecording') {
    window.callRecorder.startRecording();
  } else if (request.action === 'stopRecording') {
    window.callRecorder.stopRecording();
  }
});