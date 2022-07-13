/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var lengthOfLongestSubstring = function (s) {
  var result = '';
  var secondString = '';
  var counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      result = `${s[i]}`;
    } else {
      if (!result.includes(s[i])) {
        result = `${result}${s[i]}`;
      } else {
        if (secondString.length < result.length) {
          secondString = result;

          // result = `${result}${s[i]}`;
        }

        i = i - result.length;
        result = '';
      }
    }
  }

  return secondString.length > result.length
    ? secondString.length
    : result.length;
};

describe('test longest substring without repeatation', () => {
  it('input 1', () => {
    expect(lengthOfLongestSubstring('abc abcbb')).toBe(4);
  });

  it('input 2', () => {
    expect(lengthOfLongestSubstring('bbbb')).toBe(1);
  });

  it('input 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('input 4', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });

  it('input 5', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  });

  it('input 6', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });

  it('input 6', () => {
    expect(lengthOfLongestSubstring('jbpnbwwd')).toBe(4);
  });
});
