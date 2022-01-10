var majorityElement = function (nums) {
  let count = 0

  let majority = 0
  nums.sort()
  if (nums.length === 1) {
    return majority = nums[0]
  } else {
    for (let i = 0; i < nums.length; i++) {
      let quantity = 1

      for (let j = 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          quantity++
          if (count < quantity) {
            count = quantity
            majority = nums[i]
          }
        } else {
          nums.splice(0, quantity)
          i--
          break
        }
      }

    }
    return majority
  }
};