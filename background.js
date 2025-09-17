// Background service worker for Call Recorder extension

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'recording_started':
      console.log('Recording started on tab:', sender.tab.id);
      // Update badge to show recording status
      chrome.action.setBadgeText({
        text: 'REC',
        tabId: sender.tab.id
      });
      chrome.action.setBadgeBackgroundColor({
        color: '#ff3b30',
        tabId: sender.tab.id
      });
      break;

    case 'recording_stopped':
      console.log('Recording stopped on tab:', sender.tab.id);
      // Clear badge
      chrome.action.setBadgeText({
        text: '',
        tabId: sender.tab.id
      });
      break;

    case 'recording_processed':
      console.log('Recording processed, size:', request.data.size);
      // Store the recording data
      chrome.storage.local.set({
        recordingData: request.data.data,
        recordingSize: request.data.size,
        recordingDuration: request.data.duration,
        recordingTimestamp: Date.now()
      });
      break;

    case 'recording_error':
      console.error('Recording error:', request.data.error);
      // Clear any recording state
      chrome.storage.local.remove(['isRecording', 'recordingData']);
      break;

    default:
      console.log('Unknown message type:', request.type);
  }
});

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Call Recorder extension installed');
    
    // Set default settings
    chrome.storage.local.set({
      isRecording: false,
      recordingData: null,
      settings: {
        audioQuality: 'high',
        autoDownload: false,
        maxRecordingTime: 3600 // 1 hour in seconds
      }
    });
  }
});

// Handle tab updates to clean up recording state
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Clear recording badge when page reloads
    chrome.action.setBadgeText({
      text: '',
      tabId: tabId
    });
  }
});

// Handle tab removal to clean up
chrome.tabs.onRemoved.addListener((tabId) => {
  // Clear any recording state for this tab
  chrome.storage.local.get(['isRecording'], (result) => {
    if (result.isRecording) {
      chrome.storage.local.set({isRecording: false});
    }
  });
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // This will open the popup, but we can also add additional logic here if needed
  console.log('Extension icon clicked on tab:', tab.id);
});

// Periodic cleanup of old recordings
setInterval(() => {
  chrome.storage.local.get(['recordingTimestamp'], (result) => {
    if (result.recordingTimestamp) {
      const age = Date.now() - result.recordingTimestamp;
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours
      
      if (age > maxAge) {
        chrome.storage.local.remove(['recordingData', 'recordingSize', 'recordingDuration', 'recordingTimestamp']);
        console.log('Cleaned up old recording data');
      }
    }
  });
}, 60 * 60 * 1000); // Check every hour