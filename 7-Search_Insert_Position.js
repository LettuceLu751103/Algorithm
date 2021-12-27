// let nums = [1, 3, 5, 6]
// let target = 7

// let min = 0
// let max = nums.length - 1

// while (min <= max) {
//   let mid = Math.floor((min + max) / 2)
//   if (nums[mid] > target) {
//     console.log('a:' + mid + '' + nums[mid])

//     max = mid - 1
//   } else if (nums[mid] < target) {
//     console.log('b:'
//       +
//       mid + '' + nums[mid])

//     min = mid + 1
//   } else if (nums[mid] === target) {

//     return console.log(mid)


//   }
// }
// console.log(max)
// if (nums[max] < target) {

//   nums.splice(max + 1, 0, target)
//   return console.log( min)
// } else {
//   nums.splice(max - 1, 0, target)
//   return console.log( min)
// }


let nums = [1, 3, 5, 6]
let target = 7


var searchInsert = function (nums, target) {

  let min = 0
  let max = nums.length - 1

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (nums[mid] > target) {

      max = mid - 1
    } else if (nums[mid] < target) {


      min = mid + 1
    } else {

      return mid

    }
  }
  if (nums[max] < target) {

    nums.splice(max + 1, 0, target)
    return min
  } else {
    nums.splice(max - 1, 0, target)
    return min
  }










};





