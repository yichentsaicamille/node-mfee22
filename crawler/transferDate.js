let date = '111/01/03';
let arrDate = date.split('/');
arrDate[0] = Number(arrDate[0]) + 1911;
console.log(arrDate.join('-'));
// 2022-01-03

let num = '73,703,302';
let newNum = num.split(',');
console.log(newNum.join(''));
// 73703302
