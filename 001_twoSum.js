// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const rem = target - nums[i]
        const remIndex = nums.indexOf(rem)
        // check if rem is in the array and it is not the same index
        if (remIndex !== -1 && remIndex !== i) {
            return [i, remIndex]
        }
    }
    throw new Error('No two sum solution')
}
