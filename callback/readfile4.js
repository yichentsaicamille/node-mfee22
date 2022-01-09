// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
const { readFile } = require("fs/promises");
async function main() {
  try {
    let result = await readFile("test.txt", "utf-8");
    console.log(`這是 await 版本 ${result}`);
  } catch (err) {
    console.log(err);
  }
}
main();
