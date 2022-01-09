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

// 當三個全部都做完的時候，就會回來 3s
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});
