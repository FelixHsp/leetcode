/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/validate-ip-address/
 * @Tags: 正则
 * @Date: 2022-05-29 08:54:23 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-29 09:15:07
 */

const validIPAddress = (queryIP: string): string => {
  const ipv4Array = queryIP.split('.');
  const ipv6Array = queryIP.split(':');
  
  if (ipv4Array.length === 4) {
    for (let i = 0; i < ipv4Array.length; i++) {
      if (!ipv4Array[i] || /\b0\d+\b|\D+/.test(ipv4Array[i]) || Number(ipv4Array[i]) > 255) {
        return 'Neither';
      }
    }

    return 'IPv4';
  }

  if (ipv6Array.length === 8) {
    for (let i = 0; i < ipv6Array.length; i++) {
      if (!/\b[0-9a-fA-F]{1,4}\b/.test(ipv6Array[i])) {
        return 'Neither';
      }
    }
    return 'IPv6';
  }

  return 'Neither';
};


export default void 0;