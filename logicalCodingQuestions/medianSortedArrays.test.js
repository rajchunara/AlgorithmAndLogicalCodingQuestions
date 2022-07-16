/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var num = [...nums1, ...nums2].sort((a, b) => a - b);

  if (num.length % 2 == 1) {
    return num[Math.floor(num.length / 2)];
  } else {
    return (num[num.length / 2 - 1] + num[num.length / 2]) / 2;
  }
};

describe('Median Sorted Arrays problem of leetCode', () => {
  it('input 1 ', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });

  it('input 2 ', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
});
