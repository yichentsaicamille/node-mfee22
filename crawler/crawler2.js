// 用 async/await 寫法取得證券交易所資料
const axios = require("axios");

async function main() {
  try {
    // handle success
    let result = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=0050&_=1641716365801"
    );
    console.log(result.data);
  } catch (err) {
    // handle err
    console.log(err);
  }
}
main();
