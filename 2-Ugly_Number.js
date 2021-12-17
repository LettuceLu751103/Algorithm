
let isUgly = function (n) {

    while (n > 0) {
        if (n === 1) {
            return true
        } else if (n % 2 === 0) {
            console.log('當前n = ' + n)
            console.log('2的條件判斷式')
            n = n / 2
        } else if (n % 3 === 0) {
            console.log('當前n = ' + n)
            console.log('3的條件判斷式')
            n = n / 3
        } else if (n % 5 === 0) {
            console.log('當前n = ' + n)
            console.log('5的條件判斷式')
            n = n / 5
        } else {
            console.log('當前n = ' + n)
            console.log('不是2, 3, 5的條件判斷式')
            return false
        }
    }

}

for (let i = 0; i < 100; i++) {
    console.log(' i = ' + i)
    console.log(isUgly(i))
}
// console.log(' i = ' + 500)
// console.log(isUgly(500))