let nums = [1, 2, 3, 4]

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums = 'true'
        break

      }

    }
    if (nums === 'true') {
      break
    }
  }
  if (nums === 'true') {
    return true
  } else {
    return false
  }
};

console.log(containsDuplicate(nums))