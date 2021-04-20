import $ from 'jquery';
import {counter} from '../lib/counter';

const delay = (timeMs) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    },timeMs)
  });
};

$(window).on('load', async() => {
  console.log('on load');
  console.log(window.location.href);
  console.log(counter());
  chrome.runtime.sendMessage({type:'sendMessage'}, async (res) => {
    console.log("on recived from background:" + res);
  });
});