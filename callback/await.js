// await 是因為大家覺得Promise 還是不夠好看，希望更像「同步」的程式
// 同步: 由上往下執行(php)；非同步: 有外包公司，永遠不知道多久會好(js)
// await/async
// 是 Promise的語法糖
// -> 還是要有Promise
// -> 看到 lib 說自己是 promise-based，那十之八九可以用

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`完成工作 ${job}`); // 會把這一個 promise 物件的狀態變成 fulfilled

      // 如果發生錯誤
      // reject(err)
      // 會把這一個 promise 物件的狀態變成 rejected
    }, timer);
  });
};

// 刷牙 --> 吃早餐 --> 寫功課

// await 必須放在 async 函式裡=> 不是暫停一人公司，而是暫停這個函式，一人公司會去做別的事，被暫停的這個函式也不是沒在做事，而是被拿去外包公司做，一定要包在async裡
async function main() {
  // await 是一種"暫停鍵"，暫停到外包公司有結果為止
  // 而且結果會被回傳、放到 result1 這個變數裡
  let result1 = await doWork("刷牙", 2000);
  let dt = new Date();
  console.log(`${result1} at ${dt.toISOString()}`);

  let result2 = await doWork("吃早餐", 3000);
  dt = new Date();
  console.log(`${result2} at ${dt.toISOString()}`);

  let result3 = await doWork("寫功課", 2000);
  dt = new Date();
  console.log(`${result3} at ${dt.toISOString()}`);
}

main();

// IIFE立即被執行
(async () => {
  // 實作await的功能
})();
