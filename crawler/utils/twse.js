// twse.js 查資料的模組
const axios = require('axios');
const moment = require('moment');

async function queryStockName(stockNo) {
  let queryStockName = await axios.get(
    'https://www.twse.com.tw/zh/api/codeQuery',
    {
      params: {
        query: stockNo,
      },
    }
  );
  return queryStockName.data;
}

let queryDate = moment().format('YYYYMMDD'); // 自動用今天的日期
async function queryStockPrice(stockNo) {
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
  return response.data;
}

module.exports = { queryStockName, queryStockPrice };
