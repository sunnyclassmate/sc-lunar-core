const moment = require('moment');
const manse = require('./index');

// var today =  manse.fixKoreaDt();
// console.log(`origDt -> korDt: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(today)}`);
//
// var lunar = manse.solar2Lunar();
// console.log(`Solar -> Lunar: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(lunar)}`);
//
// var solar = manse.lunar2Solar();
// console.log(`Lunar -> Solar: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(solar)}`);
//
//
// var lunar = manse.solar2Lunar("197201261130");
// console.log(`Solar -> Lunar: ${moment('197201261130', 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(lunar)}`);
//
// var solar = manse.lunar2Solar("197201261130");
// console.log(`Lunar -> Solar: ${moment('197201261130', 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(solar)}`);
//
// var lunar = manse.solar2Lunar("198310311130");
// console.log(`Solar -> Lunar: ${moment('198310311130', 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(lunar)}`);

var solar = manse.lunar2Solar("198310311130");
console.log(`Lunar -> Solar: ${moment('198310311130', 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(solar)}`);
var solar = manse.lunar2Solar("198310311330");
console.log(`Lunar -> Solar: ${moment('198310311330', 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(solar)}`);

var canchi = manse.getCanChi('197201261130');
console.log(`${JSON.stringify(canchi)}`);
var canchi = manse.getCanChi('19720126');
console.log(`${JSON.stringify(canchi)}`);
var canchi = manse.getCanChi('197201251130');
console.log(`${JSON.stringify(canchi)}`);
var canchi = manse.getCanChi('197201241130');
console.log(`${JSON.stringify(canchi)}`);