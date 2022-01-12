let prices = [7, 6, 4, 3, 1]
let min = Number.MAX_SAFE_INTEGER
let profit = 0
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }
  let maxProfit = prices[i] - min
  if (profit < maxProfit) {
    profit = maxProfit
  }
}
return console.log(profit)