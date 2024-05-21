function buildArray(nums) {
  const n = nums.length;
  const ans = new Array(n);

  for (let i = 0; i < n; i++) {
    ans[i] = Math.floor((n * nums[nums[i] % n] + nums[i]) / n);
  }

  return ans;
}

const result = buildArray([0, 2, 1, 5, 3, 4]);
console.log(result);
