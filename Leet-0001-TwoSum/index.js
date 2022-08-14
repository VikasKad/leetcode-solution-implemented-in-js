/*
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to 
target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

/*
------ Solution ------
1. create new map variable
2. Loop array
3. secondNumber = get second Number by subtracting target-arr[i]
4. if secondNumber is available in map then
    return [map.get(secondNumber),i]// in short indexes of the both numbers
    else
        set map with value and index => map.set(arr[i],i)
*/
const twoSum = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const secondNumber = target - arr[i];
        if (map.has(secondNumber)) {
            return [map.get(secondNumber), i];
        } else {
            map.set(arr[i], i)
        }
    }
    return [];
}

console.log('Output should be [0,1]: ', twoSum([2, 7, 11, 15], 9));
console.log('Output should be [1,2]: ', twoSum([3, 2, 4], 6));
console.log('Output should be [1,3]: ', twoSum([2, 7, 11, 15], 22));
console.log('Output should be [1,2]: ', twoSum([2, 7, 11, 15], 18));
console.log('Output should be [0,2]: ', twoSum([2, 7, 11, 15], 13));
console.log('Output should be [0,4]: ', twoSum([2, 7, 11, 15, 32], 34));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if((parseInt(nums[i])+parseInt(nums[j]))===target){
               return [i,j];
               }
        }    
    }
};