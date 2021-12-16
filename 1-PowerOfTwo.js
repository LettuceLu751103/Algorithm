
// console.log(Math.log2(8))

for (let i = 0; i < 1025; i++) {
    // console.log(`==== ${i} ====`)
    // console.log(Math.log2(i))
    // console.log(Math.log2(i) % 2)
    powerOfTwo(i)
}

function powerOfTwo(n) {

    if (n === 1 || n === 2) {
        console.log('2的n次方')
        return true
    } else if (Number.isInteger(Math.log2(n))) {
        console.log(`=== 進來的 n = ${n} ====`)
        console.log('2的n次方')
        return true
    } else {
        // console.log('不是2的n次方')
        return false
    }
}
