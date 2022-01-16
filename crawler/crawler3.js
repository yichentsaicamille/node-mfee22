// 用 async/await 寫法取得證券交易所資料
const axios = require('axios');
const { readFile } = require('fs/promises');
const moment = require('moment');

(async () => {
  try {
    let stockNo = await readFile('stock.txt', 'utf-8');
    let queryDate = moment().format('YYYY/MM/DD'); // 自動用今天的日期

    let result = await axios.get(
      'https://www.twse.com.tw/exchangeReport/STOCK_DAY',
      {
        // 這裡可以放一些設定
        // params: 放 query string 的參數
        params: {
          response: 'json',
          date: queryDate,
          stockNo,
        },
      }
    );
    console.log(result.data);
  } catch (err) {
    // handle err
    console.log(err);
  }
})();
