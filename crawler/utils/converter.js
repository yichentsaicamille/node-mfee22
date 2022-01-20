// 處理資料的模組
// 處理股票名稱
function parseStockName(stockNameData) {
  if (
    !stockNameData.suggestions ||
    stockNameData.suggestions[0] === '(無符合之代碼或名稱)'
  ) {
    throw new Error('查無此代碼');
  }
  // 有代碼，可以到這裡，表示有資料
  let stockData = stockNameData.suggestions[0];
  let stockDatas = stockData.split('\t');
  return stockDatas[1];
}

// 處理價格資料
function convertPrice(responseStockPrice, stockNo) {
  let processData = responseStockPrice.data.map((d) => {
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
  });
  return processData;
}

module.exports = { parseStockName, convertPrice };
