document.addEventListener('DOMContentLoaded', function() {
  const recordBtn = document.getElementById('recordBtn');
  const stopBtn = document.getElementById('stopBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const status = document.getElementById('status');

  let isRecording = false;
  let recordingData = null;

  // Check current recording status
  chrome.storage.local.get(['isRecording', 'recordingData'], function(result) {
    if (result.isRecording) {
      setRecordingState(true);
    }
    if (result.recordingData) {
      recordingData = result.recordingData;
      downloadBtn.disabled = false;
    }
  });

  recordBtn.addEventListener('click', function() {
    if (!isRecording) {
      startRecording();
    }
  });

  stopBtn.addEventListener('click', function() {
    if (isRecording) {
      stopRecording();
    }
  });

  downloadBtn.addEventListener('click', function() {
    if (recordingData) {
      downloadRecording();
    }
  });

  function startRecording() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: startAudioRecording
      }, function() {
        if (chrome.runtime.lastError) {
          console.error('Error starting recording:', chrome.runtime.lastError);
          status.textContent = 'Error: Could not start recording';
          return;
        }
        
        setRecordingState(true);
        chrome.storage.local.set({isRecording: true});
      });
    });
  }

  function stopRecording() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: stopAudioRecording
      }, function() {
        if (chrome.runtime.lastError) {
          console.error('Error stopping recording:', chrome.runtime.lastError);
          return;
        }
        
        setRecordingState(false);
        chrome.storage.local.set({isRecording: false});
        
        // Wait a moment for the recording to be processed
        setTimeout(() => {
          chrome.storage.local.get(['recordingData'], function(result) {
            if (result.recordingData) {
              recordingData = result.recordingData;
              downloadBtn.disabled = false;
              status.textContent = 'Recording completed! Ready to download.';
            }
          });
        }, 1000);
      });
    });
  }

  function downloadRecording() {
    if (!recordingData) return;

    // Create a blob from the base64 data
    const byteCharacters = atob(recordingData);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'audio/mp3' });

    // Create download URL and trigger download
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `call-recording-${timestamp}.mp3`;

    chrome.downloads.download({
      url: url,
      filename: filename,
      saveAs: true
    }, function(downloadId) {
      if (chrome.runtime.lastError) {
        console.error('Download failed:', chrome.runtime.lastError);
        status.textContent = 'Download failed';
      } else {
        status.textContent = 'Download started!';
        // Clean up
        setTimeout(() => {
          URL.revokeObjectURL(url);
          recordingData = null;
          downloadBtn.disabled = true;
          chrome.storage.local.remove(['recordingData']);
        }, 1000);
      }
    });
  }

  function setRecordingState(recording) {
    isRecording = recording;
    recordBtn.disabled = recording;
    stopBtn.disabled = !recording;
    
    if (recording) {
      status.innerHTML = '<span class="recording-indicator"></span>Recording in progress...';
      status.className = 'status recording';
    } else {
      status.textContent = 'Ready to record';
      status.className = 'status';
    }
  }
});

// Functions to be injected into the page
function startAudioRecording() {
  window.callRecorder = window.callRecorder || new CallRecorder();
  window.callRecorder.startRecording();
}

function stopAudioRecording() {
  if (window.callRecorder) {
    window.callRecorder.stopRecording();
  }
}