import { browser } from 'webextension-polyfill-ts';

export const load = async() => {
  return (await browser.storage.local.get('data')).data;
}

export const save = async(data:string) => {
  await browser.storage.local.set({data});
}