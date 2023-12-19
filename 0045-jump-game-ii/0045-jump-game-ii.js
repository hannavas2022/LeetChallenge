/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let cache = new Array(nums.length).fill(1000000);
    
    cache[0] = 0;
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<=i+nums[i] && j<nums.length; j++) {
            cache[j] = Math.min(cache[j],cache[i]+1)
        }
    }
    
    return cache[cache.length-1];  
};