// exports=module.exports = {}; 偷偷執行
// exports 本身是一個物件
exports.color = 'red';
let name = 'default';
exports.setName = function (firstName, lastName) {
  name = `${firstName} ${lastName}`; // 給值
};
exports.showName = function () {
  console.log(`Hi, ${name}`); // 傳值
};
// return module.exports 偷偷執行
