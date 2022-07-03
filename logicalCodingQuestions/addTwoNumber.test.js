/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit.
 Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

var addTwoNumbers = function (l1, l2) {
  //   var l1Reverse = l1.reverse();
  //   var l2Reverse = l2.reverse();

  //   var l1Join = l1Reverse.join('');
  //   var l2Join = l2Reverse.join('');

  //   var l1ToInt = parseInt(l1Join);
  //   var l2ToInt = parseInt(l2Join);

  //   var total = l1ToInt + l2ToInt;
  //   var convToString = total.toString();
  //   var thenSplit = convToString.split('');
  //   var thenReverse = thenSplit.reverse();

  //   var thenMap = thenReverse.map((i) => parseInt(i));

  var result = (
    parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''))
  )
    .toString()
    .split('')
    .reverse()
    .map((i) => parseInt(i));

  return result;
};

describe('test addTwoNumber problem of leetCode', () => {
  it('input 1 ', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });

  it('input 2 ', () => {
    expect(addTwoNumbers([0], [0])).toEqual([0]);
  });

  it('input 3 ', () => {
    expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
      8, 9, 9, 9, 0, 0, 0, 1,
    ]);
  });
});
