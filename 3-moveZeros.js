


let moveZeros = function (nums) {
    let temp
    for (let j = 0; j < nums.length - 1; j++) {
        for (let i = j + 1; i <= nums.length; i++) {
            if (i < nums.length) {
                if (nums[j] > nums[i]) {
                    temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                }
            }
        }
    }

    let zeroLength = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroLength++
        }
    }
    if (zeroLength === nums.length) {
        nums = nums
    } else {
        while (nums[0] === 0) {
            nums.push(nums.shift())
        }
    }


    console.log(nums)
}

moveZeros([2, 1])