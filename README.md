# Call Recorder Chrome Extension

A Chrome extension that allows you to record calls and download them as MP3 files. This extension captures audio from your microphone and browser tabs, processes it, and provides easy download functionality.

## Features

- 🎙️ **Audio Recording**: Record audio from microphone and browser tabs
- 🎵 **MP3 Export**: Convert recordings to MP3 format for easy sharing
- 💾 **Easy Download**: One-click download with timestamped filenames
- 🎨 **Modern UI**: Beautiful, responsive popup interface
- 🔒 **Privacy Focused**: All processing happens locally in your browser
- ⚡ **Real-time**: Live recording with visual indicators

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. **Download the Extension**
   - Download or clone this repository
   - Extract the files to a folder on your computer

2. **Enable Developer Mode**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle "Developer mode" in the top right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Select the folder containing the extension files
   - The extension should now appear in your extensions list

4. **Pin the Extension**
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "Call Recorder" and click the pin icon to keep it visible

### Method 2: Install from Chrome Web Store (Coming Soon)

*This extension will be available on the Chrome Web Store once it passes review.*

## Usage

### Starting a Recording

1. **Navigate to the page** where you want to record audio (e.g., a video call, audio streaming site)
2. **Click the Call Recorder icon** in your Chrome toolbar
3. **Click "Start Recording"** in the popup
4. **Grant microphone permissions** when prompted
5. **The recording indicator** will show that recording is in progress

### Stopping and Downloading

1. **Click "Stop Recording"** when you're done
2. **Wait for processing** (the extension will convert the audio to MP3)
3. **Click "Download MP3"** to save the file to your computer
4. **Choose your save location** in the download dialog

### Recording Sources

The extension can capture audio from:
- **Microphone**: Your computer's microphone input
- **Browser Tab Audio**: Audio playing in the current tab (when available)
- **Combined Audio**: Both microphone and tab audio simultaneously

## Technical Details

### Architecture

- **Manifest V3**: Uses the latest Chrome extension architecture
- **Content Scripts**: Inject recording functionality into web pages
- **Background Service Worker**: Handles audio processing and storage
- **Popup Interface**: Provides user controls and status updates

### Audio Processing

- **Input**: Captures audio using Web Audio API and MediaRecorder
- **Format**: Records in WebM format, converts to MP3
- **Quality**: 44.1kHz sample rate, 128kbps MP3 encoding
- **Processing**: All audio processing happens locally in your browser

### Permissions

The extension requires these permissions:
- `activeTab`: Access to the current tab for audio capture
- `storage`: Store recording data temporarily
- `downloads`: Save MP3 files to your computer
- `scripting`: Inject recording functionality into pages
- `host_permissions`: Access to all websites for universal compatibility

## Privacy and Security

### Data Handling
- **Local Processing**: All audio processing happens in your browser
- **No Cloud Upload**: Recordings never leave your computer
- **Temporary Storage**: Recording data is stored locally and automatically cleaned up
- **No Tracking**: The extension doesn't collect or transmit any personal data

### Legal Considerations
- **Consent Required**: Always ensure you have permission to record conversations
- **Local Laws**: Check your local laws regarding audio recording
- **Privacy Rights**: Respect others' privacy when recording

## Troubleshooting

### Common Issues

**"Could not start recording"**
- Ensure you've granted microphone permissions
- Check that your microphone is working in other applications
- Try refreshing the page and starting recording again

**"Tab audio capture not available"**
- This is normal for some websites due to security restrictions
- The extension will fall back to microphone-only recording
- Try using the extension on different websites

**"Download failed"**
- Check that you have sufficient disk space
- Ensure your browser allows downloads
- Try downloading to a different location

**Recording quality issues**
- Check your microphone settings in Chrome
- Ensure you're in a quiet environment
- Try adjusting your system's audio levels

### Browser Compatibility

- **Chrome**: Full support (recommended)
- **Edge**: Should work (Chromium-based)
- **Firefox**: Not supported (different extension format)
- **Safari**: Not supported (different extension format)

## Development

### Project Structure

```
call-recorder-extension/
├── manifest.json          # Extension configuration
├── popup.html            # Popup interface
├── popup.js              # Popup functionality
├── content.js            # Content script for recording
├── background.js         # Background service worker
├── lame.min.js          # MP3 encoding library
├── icons/               # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md            # This file
```

### Building from Source

1. Clone the repository
2. No build process required - the extension runs directly from source
3. Load as unpacked extension in Chrome

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This extension is provided for educational and personal use. Users are responsible for complying with all applicable laws and regulations regarding audio recording. The developers are not responsible for any misuse of this software.

## Support

If you encounter issues or have questions:
1. Check the troubleshooting section above
2. Review the Chrome extension documentation
3. Open an issue on the project repository

## Changelog

### Version 1.0.0
- Initial release
- Basic recording functionality
- MP3 export capability
- Modern UI design
- Local audio processing

---

**Note**: This extension is designed for legitimate use cases such as recording online meetings, lectures, or personal audio content. Always respect privacy laws and obtain proper consent before recording conversations.