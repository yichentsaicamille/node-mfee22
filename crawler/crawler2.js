// 用 async/await 寫法取得證券交易所資料
const axios = require("axios");
//  IIFE (()=>{})()
(async ()=> {
  try {
    // handle success
    let stockNo="2330";
    let queryDate="20220114";
    
    // let result = await axios.get(
    //   `?response=json&date=${queryDate}&stockNo=${stockNo}&_=1641716365801`
    // );
    let result = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      // 這裡可以放一些設定
      // params: 放 query string 的參數
      params:{
        response: "json",
        date: queryDate,
        stockNo,
      },
    })
    console.log(result.data);
  } catch (err) {
    // handle err
    console.log(err);
  }
})();
