function PentagonalNumber(num) { 
    var nums = [1];

    while (nums.length !== num) {
        nums.push(nums[nums.length-1] + nums.length * 5);
    }

    return nums[nums.length-1];           
  }