CJS (common JS) --> NodeJS(目前會學的): 瀏覽器不支援
-> require

ESM(ES2015 module) --> JS 內建(未來會統一)
-> NodeJS 跟 瀏覽器都可以用
-> import/export

```javascript
// exports=module.exports = {};

// return module.exports;
```

注意，這邊回傳的是 module.exports，所以，如果有給 exports 一個新的物件，對外部是沒有用的。

例如以下寫法，這樣最後回傳的 module.exports 還是空的...

```bash
// exports = module.exports = {};
// exports 本身是一個物件

let name = "default";

function setName(newName) {
  name = newName;
}

function showName() {
  console.log(name);
}

exports = { setName, showName }; ## error

// return module.exports;
```