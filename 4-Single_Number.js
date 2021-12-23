var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1)
        j--
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] === nums[k]) {
            nums.splice(k, 1)
            k--
          }

        }
        nums.splice(i, 1)
        i--
      }
    }

  }

  return nums = nums[0]

};
