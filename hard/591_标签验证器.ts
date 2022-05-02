/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/tag-validator/
 * @Tags: 正则
 * @Date: 2022-05-02 09:02:31 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-02 09:02:56
 */

const isValid = (code: string): boolean => {
  // remove <![CDATA[<div>]]>
  code = code.replace(/\<\!\[CDATA\[.*?\]\]\>/g, 'CDATA');

  // remove <DIV>*</DIV>
  while (/\<([A-Z]{1,9}?)\>([^<]*)<\/(\1)>/.test(code)) {
    code = code.replace(/\<([A-Z]{1,9}?)\>([^<]*)<\/(\1)>/g, 'Felix');
  }

  return code === 'Felix';
};

const code = '<DIV><DIV>This is the first line <![CDATA[<div>]]></DIV>This is the first line <![CDATA[<div>]]></DIV>';

console.log(isValid(code));

export default void 0;