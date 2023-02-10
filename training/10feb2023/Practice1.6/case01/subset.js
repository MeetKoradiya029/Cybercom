nums = [1, 2, 2];
res = [];



function subsetFunc(nums){

    res=[]
    subsets=[];
    nums.sort();

    var subset = function (start, nums, res, subsets = []) {
        if (start === nums.length + 1) {
          return;
        }
      
        res.push([...subsets]);
        for (let i = start; i < nums.length; i++) {
          if (start !== i && nums[i] === nums[i - 1]) {
            continue;
          }
          subsets.push(nums[i]);
        //   console.log("subsets before rescursion :-"+subsets)
          subset(i + 1, nums, res, subsets);
          console.log("subsets "+subsets);
          subsets.pop();
          console.log("subsets after pop :-"+subsets);
        }
      
      };

      subset(0,nums,res,subsets)
      return res;
    
}

console.log(subsetFunc(nums));
// subsetsWithDup(nums)
