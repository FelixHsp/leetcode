/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/encode-and-decode-tinyurl/
 * @Date: 2022-06-29 21:26:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-29 21:37:36
 */

const map: Map<number, string> = new Map();
const tinyUrl = 'http://tinyurl.com/';

const encode = (longUrl: string): string => {
  let random: number;
  while (true) {
    random = Math.floor(Math.random() * 10000);
    if (!map.has(random)) {
      break;
    }
  }

  map.set(random, longUrl);
  return `${tinyUrl}${random}`;
};

const decode = (shortUrl: string): string => {
  const [, id] = shortUrl.match(/http\:\/\/tinyurl\.com\/(.*)/) as RegExpMatchArray;

  return map.get(Number(id)) as string;
};

export default void 0;