// 0 1 2 3 5 8 13 21

function fibonacci_series(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var total = fibonacci_series(n - 1);
    total.push(total[total.length - 1] + total[total.length - 2]);
    return total;
  }
}

console.log(fibonacci_series(9));
console.log(fibonacci_series(1));
