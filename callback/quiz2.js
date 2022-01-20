// block 區域作用域
// setTimeout大括號沒有宣告i，所以往外找，外面的 i 因為看到for迴圈的大括號所以會各跑一次for迴圈: i=0, i=1,...，就會印出01234
for (let i = 0; i < 5; i++) {
  // i=0, i=1, i=2...
  setTimeout(() => {
    console.log(i); // 01234
  }, 1000);
}
// 印出什麼?
// 為什麼?
// ----------------------------------------
// ex2:
// let a = 1;
// {
//   let a = 2;
//   console.log(a); // 2
// }
// console.log(a); // 1
// ----------------------------------------

// function 函式作用域
// var i = 0; setTimeout大括號沒有宣告i，所以往外找，外面的 i 已經被 var 跑完變成 5(var不理會大括號)，所以印出五個 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 55555
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  // (()=>{}()) function scope
  // 使用IIFE把i鎖在大括號裡
  ((i) => {
    setTimeout(() => {
      console.log(i); // 01234
    }, 1000);
  })(i);
}
// 印出什麼?
// 為什麼?

// ----------------------------------------
// ex2:
// var a = 1;
// {
// var a = 2;
//   console.log(a); // 2
// }
// console.log(a); // 2
