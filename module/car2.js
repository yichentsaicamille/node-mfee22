// exports = module.exports = {};
// exports 本身是一個物件

let name = 'default';

function setName(newName) {
  name = newName;
}

function showName() {
  console.log(name);
}
// exports = { setName, showName } -> error，產生新的記憶體位置，抓不到
module.exports = { setName, showName };

// return module.exports;
