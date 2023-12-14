/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const countMap = {};
    nums.forEach(function(val, index){
        val in countMap ? countMap[val]++ : countMap[val] = 1;
        if(countMap[val] > 2) {
            countMap[val] = 2
            nums[index] = NaN;
        }
    });

    let lastNaNIndex = -1;

    nums.forEach(function(val, currentIndex){
        if(isNaN(val) && lastNaNIndex === -1) {
            lastNaNIndex = currentIndex;
            return;
        }

        if (lastNaNIndex > -1 && !isNaN(val)) {
            swap(nums, lastNaNIndex, currentIndex)
            lastNaNIndex = lastNaNIndex+1;
        }
    })

    return Object.values(countMap).reduce(function(total, val){
        return total + val
    },0)
};

function swap (nums, i,j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;  
};