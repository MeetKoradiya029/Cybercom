const nums = [-1,2,1,-4];
let target = 1;

function closestSum(nums, target) {
  let sum = Number.MAX_VALUE;
    
  console.log(sum);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // Update the closestSum
        if (
          Math.abs(target - sum) >
          Math.abs(target - (nums[i] + nums[j] + nums[k]))
        ){
          sum = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }

  return sum;
}
console.log(closestSum(nums, target));
