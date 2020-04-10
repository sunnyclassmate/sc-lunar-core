const moment = require('moment');
const manse = require('./index');

var today =  manse.fixKoreaDt();
console.log(`origDt -> korDt: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(today)}`);

var lunar = manse.solar2Lunar();
console.log(`Solar -> Lunar: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(lunar)}`);

var solar = manse.lunar2Solar();
console.log(`Lunar -> Solar: ${moment().format('YYYY-MM-DD HH:mm')} -> ${JSON.stringify(solar)}`);
