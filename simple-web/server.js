// nodejs 內建的模組，不用安裝
const http = require('http');
require('dotenv').config();

const server = http.createServer(function (request, response) {
  // TODO: 怎麼處理 request, 要負責回覆 response
  // status code
  // 1xx(很少用), 2xx(201、202成功回應), 3xx(300、301 重導向), 4xx(client錯誤), 5xx(server端錯誤)
  // 要安裝nodemon在 npm i -g nodemon，就不用每次修改程式內容都要重刷頁面
  // 結耦合: 使用npm run dev執行node server.js，不管改了什麼只要用npm run dev就能執行(不需要限制用yarn、npm、npx...)

  response.statusCode = 200;
  const path = request.url;
  console.log(path);

  switch (path) {
    case '/':
      response.end('Hello, Server EFG');
      break;
    case '/about':
      response.end('Hello, this is about');
      break;
    default:
      response.statusCode = 404;
      response.end();
  }
});

// 做預設值
let port = process.env.SERVER_PORT || 3000;
server.listen(port, () => {
  console.log(`我們的簡易版 server 已經啟動，在 port ${port} 上`);
});
