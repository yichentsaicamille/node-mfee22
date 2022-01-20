const { readFile } = require('fs/promises');
const twse = require('./utils/twse');
const converter = require('./utils/converter');
const twseSaver = require('./utils/twseSaver');
const connection = require('./utils/db');

(async () => {
  try {
    // 根據變數去抓取資料
    let stockNo = await readFile('stock.txt', 'utf-8');

    // 抓取股票中文名稱，順便確認股票代碼是否存在
    let stockNameData = await twse.queryStockName(stockNo);
    // console.log(stockNameData);

    // 檢查代碼是否存在
    // 同步程式，不需要await
    // 解析查到的資料
    let stockName = converter.parseStockName(stockNameData);
    // console.log(stockName);

    // 儲存股票代碼與名稱進資料庫
    let saveNameResult = await twseSaver.saveStockName(
      connection,
      stockNo,
      stockName
    );
    // console.log(saveNameResult);

    // 查價格
    let responseStockPrice = await twse.queryStockPrice(stockNo);
    // console.log(responseStockPrice);

    // 開始處理資料
    let processData = converter.convertPrice(responseStockPrice, stockNo);
    // console.log(processData);

    // 把整理好的價格存進資料庫
    let saveStockPrice = await twseSaver.saveStockPrice(
      connection,
      processData
    );
    // console.log(saveStockPrice);
  } catch (e) {
    console.error(e);
  }
  connection.end();
})();
