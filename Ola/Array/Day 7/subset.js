//Solution
var subsetsWithDup = function (nums) {
  const endResult = [];
  const subset = [];
  nums.sort((a, b) => a - b);

  const backtrack = (start) => {
    endResult.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      subset.push(nums[i]);
      backtrack(i + 1);
      subset.pop();
    }
  };
  backtrack(0);
  return endResult;
};

console.log(subsetsWithDup([1, 2, 2]));