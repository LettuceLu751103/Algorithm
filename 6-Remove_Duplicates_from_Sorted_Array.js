let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

let k = 0
// let quantity = 0


for (let i = 0; i < nums.length - 1; i++) {
  // console.log('i:' + i)
  for (let j = i + 1; j < nums.length; j++) {
    // console.log('j:' + j + nums[j])
    if (nums[i] === nums[j]) {
      nums.splice(j, 1)
      j--
      // quantity++
    }
  }
}
k = nums.length

// for (let a = 0; a < quantity; a++) {
//   nums[k + a] = '_'
// }

console.log(nums)
console.log(k)