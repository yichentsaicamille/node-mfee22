// promise 版本的 axios 爬蟲
const axios = require("axios");

axios
  .get(
    "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=0050&_=1641716365801"
  )
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
