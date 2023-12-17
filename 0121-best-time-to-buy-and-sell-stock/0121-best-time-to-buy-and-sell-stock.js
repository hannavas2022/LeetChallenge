/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var n = prices.length;
  var minPrice = Number.MAX_SAFE_INTEGER;
  var maxProfit = 0;
  for (var i = 0; i < n; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;  
};