const axios = require('axios');
const { readFile } = require('fs/promises');
const moment = require('moment');
const mysql = require('mysql2');
require('dotenv').config();

(async () => {
  let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    // 根據變數去抓取資料
    // 從 stock.txt 中讀出檔案代碼
    let stockNo = await readFile('stock.txt', 'utf-8');

    // 抓取股票中文名稱，順便確認股票代碼是否存在
    let queryStockName = await axios.get(
      'https://www.twse.com.tw/zh/api/codeQuery',
      {
        params: {
          query: stockNo,
        },
      }
    );
    // console.log(queryStockName.data);
    // queryStockName.data.suggestions
    // 檢查代碼是否存在
    if (
      !queryStockName.data.suggestions ||
      queryStockName.data.suggestions[0] === '(無符合之代碼或名稱)'
    ) {
      throw new Error('查無此代碼');
    }
    // 有代碼，可以到這裡，表示有資料
    let stockData = queryStockName.data.suggestions[0];
    let stockDatas = stockData.split('\t');
    let stockName = stockDatas[1];

    // 儲存股票代碼與名稱進資料庫
    // connection.query --> prepare statement
    let saveNameResult = await connection.execute(
      'INSERT IGNORE INTO stocks (id, name) VALUES (?, ?)',
      [stockNo, stockName]
    );
    // console.log(saveNameResult);

    let queryDate = moment().format('YYYYMMDD'); // 自動用今天的日期

    // 查價格
    let response = await axios.get(
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

    // 開始處理資料
    let processData = response.data.data.map((d) => {
      // d 是陣列
      // 處理民國年轉西元年
      let arrDate = d[0].split('/');
      arrDate[0] = Number(arrDate[0]) + 1911;
      d[0] = arrDate.join('-');
      // 對每一個欄位處理千分逗點
      d = d.map((value) => {
        return value.replace(/[,]+/g, '');
      });
      d.unshift(stockNo);
      return d;
      // [
      //     '110/12/02',
      //     '9,133,260',
      //     '1,292,045,173',
      //     '140.10',
      //     '141.95',
      //     '139.70',
      //     '141.80',
      //     '+1.50',
      //     '9,601'
      //   ],
    });
    console.log(processData);

    // 把整理好的資料存進資料庫
    //connection.execute -> 處理 bulk insert 的 prepare statement 會有點小 bug -> 回傳的是 promise 可以被 await
    // connection.query -> 回傳的不是 promise 不可以被 await
    let savePriceResult = await connection
      .promise()
      .query(
        'INSERT IGNORE INTO stock_prices (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?',
        [processData]
      );
    console.log(savePriceResult);
  } catch (e) {
    console.error(e);
  }
  connection.end();
})();
