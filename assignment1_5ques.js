var merge = function(nums1, m, nums2, n) {
    let n2 = n;
   for (let i = 0; i < n; i++) {
       nums1[m + i] = nums2[n2 - 1];
       while (n2 < 0) {
           return;
       }
       n2--;
   }
   nums1.sort((a, b) => a - b);
  
};