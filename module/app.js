// let { showName } = require('./car'); 大括號是只引用showName這個函式，所以下面代showName()，就可以呼叫car.js的name="default"
let car = require('./car2');

// showName();
console.log(car.color);
car.color = 'blue';
console.log(car.color);
car.setName('AAAA', 'BBB');
car.showName();

// 模組來源:
// 1. 內建的, fs(file system)
// require("fs")
// 2. 第三方: mysql2, moment, axios, dotenv,...
// // require("mysql2")
// 3. 自己開發的*(現在要做的)
// require('./car2'); 自己給路徑
