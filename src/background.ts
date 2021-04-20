import {counter} from './lib/counter';
chrome.runtime.onMessage.addListener((message, sender, callback) => {
  switch(message.type) {
    case 'sendMessage':
      callback('Hello from background:' + counter());
      break;
    default:
      break;
  }
  return true;
});