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

let p1 = doWork("刷牙", 2000);
let p2 = doWork("吃早餐", 1000);
let p3 = doWork("寫功課", 3000);

// 當三個全部都做完的時候，才會顯示: 3s後，找最長的時間
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});
