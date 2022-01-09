let doWork = function (job, timer, callback) {
  setTimeout(() => {
    // callback的設計上
    // 通常第一個參數會是錯誤
    // 通常第二個參數會是結果

    callback(null, `完成工作 ${job}`);
  }, timer);
};

// 刷牙 --> 吃早餐 --> 寫功課
let dt = new Date();
console.log(`Start ${dt.toISOString()}`);
doWork("刷牙", 2000, (err, result) => {
  // 刷牙 --> 吃早餐 --> 寫功課
  let dt = new Date();
  console.log(`${result} at ${dt.toISOString()}`);

  doWork("吃早餐", 3000, (err, result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    doWork("寫功課", 2000, (err, result) => {
      let dt = new Date();
      console.log(`${result} at ${dt.toISOString()}`);
    });
  });
});
// 以後不要用callback寫，會被扣分
