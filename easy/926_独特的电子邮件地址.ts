/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/unique-email-addresses/
 * @Date: 2022-06-04 09:31:41 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 09:59:10
 */

// 输入：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// 输出：2
// 解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。

const numUniqueEmails = (emails: string[]): number => {
  let set: Set<string> = new Set();

  for (let i = 0; i < emails.length; i++) {
    const [, local, , ip] = emails[i].match(/^([\w|\.]*)(\+.*)?(\@.+)$/) as RegExpMatchArray;
    set.add(`${local.replace(/\./g, '')}${ip}`);
  }

  return set.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));

export default void 0;