// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值

const { readFile } = require("fs");
// 建立promise函式，承諾給一個成功或失敗的條件
let readfilePromise = new Promise((resolve, reject) => {
  readFile("test.txt", "utf-8", (err, data) => {
    // 失敗
    if (err) {
      reject(err);
      return;
    }
    // 成功
    resolve(data);
    // insert to mysql
  });
});
// pedding
console.log(readfilePromise);
readfilePromise
  // 成功fn
  .then((result) => {
    //接住resolve的結果
    console.log(`這是 Promise 的 result: ${result}`);
  })
  // 失敗fn
  .catch((err) => {
    console.log(`這是 Promise 的 err: ${err}`);
  });
