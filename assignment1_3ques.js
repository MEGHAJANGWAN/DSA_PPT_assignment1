let searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let ans = nums.length;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        return mid;
      }else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        ans = mid;
        end = mid -1;
      }
    }
    return ans;
      
  };