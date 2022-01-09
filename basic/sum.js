// sum.js

// 寫程式前須考慮:
// big O 執行效率、可讀性、擴充性、維護性...

function sum_for(n) {
  // result = 1 + 2 + 3 + .... + n
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
    // another code
  }
  return result;

  // if n is 5, L11 會跑幾次？ 5
  // if n is 10, L11 會跑幾次？ 10
  // if n is 1000, L11 會跑幾次？ 1000
  // 執行的效率會隨著 n 成等比例增加 --> O(n) <-- O(2n) O(3n)
}

function sum_formula(n) {
  // 梯形公式解
  let result = ((1 + n) * n) / 2;
  return result;
  // n = 1 => L24 執行 1 次
  // n = 2 => L24 執行 1 次
  // n = 10000 => L24 執行 1 次
  // O(1) <== O(2), O(3),...
  // 執行的效率跟輸入值的大小沒有關係，執行的效能是一個「常數」
}

const sum_array = (n) => {
  arr = [];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  let result = arr.reduce(reducer, 0);
  return result;
};

function sum_recursive(n) {
  // 停止點
  if (n < 1) return 0;
  return n + sum_recursive(n - 1);
}

// 壓力測試

// for 迴圈
console.time("for");
for (let i = 1; i <= 100000; i++) {
  sum_for(1000); // O(n)
}
console.timeEnd("for");

// 梯形公式
console.time("formula");
for (let i = 1; i <= 100000; i++) {
  sum_formula(1000); // O(1)
}
console.timeEnd("formula");

// 陣列
console.time("array");
for (let i = 1; i <= 100000; i++) {
  sum_array(1000); // O(1)
}
console.timeEnd("array");

// 遞迴
console.time("recursive");
for (let i = 1; i <= 100000; i++) {
  sum_recursive(1000); // O(1)
}
console.timeEnd("recursive");

//結果
/*
for: 73.142ms
formula: 2.979ms 最快
array: 1.054s 最久
recursive: 680.669ms
*/

/*
let result = 0
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    result += i*j;
  }
}
n = 1 ==> L25 會跑 1 次
n = 2 ==> L25 會跑 4 次
n = 3 ==> L25 會跑 9 次
n = 100 ==> L25 會跑 100x100 次
O(n^2)
let result = 0
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    for(let k = 0; k < n; k++) {
      result += i * j * k;
    }
  }
}
O(n^3)
*/

/*
執行效率
O(1) > O(log n) > O(n) > O(nlog n) > O(n^2) > O(n^3)
*/
