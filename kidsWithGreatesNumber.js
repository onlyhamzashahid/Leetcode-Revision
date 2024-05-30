var kidsWithCandies = function (candies, extraCandies) {
  let result = new Array();
  let n = candies.length;

  for (let i = 0; i < n; i++) {
    let most = Math.max(...candies);
    console.log(most)
    if (candies[i] + extraCandies >= most) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

const result = kidsWithCandies([2, 3, 5, 1, 3], 3);
console.log(result);
