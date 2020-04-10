const cc = require('./lunar-converter');

let now = new Date();

let dateLunar = cc.solar2Lunar(now.getFullYear(),now.getMonth() + 1, now.getDate());
console.log('Solar -> Lunar:', [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') , '->', [dateLunar.y, dateLunar.m, dateLunar.d].join('/'));

let dateSolar = cc.lunar2Solar(now.getFullYear(),now.getMonth() + 1, now.getDate());
console.log('Lunar -> Solar:', [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') , '->', [dateSolar.y, dateSolar.m, dateSolar.d].join('/'));

console.log('validLunar:', [1983,10,29].join('/') , '??', cc.isValidLunar(1983,10,29));
console.log('validLunar:', [1983,10,30].join('/') , '??', cc.isValidLunar(1983,10,30));
console.log('validLunar:', [1983,10,31].join('/') , '??', cc.isValidLunar(1983,10,31));
console.log('validLunar:', [1983,11,1].join('/') , '??', cc.isValidLunar(1983,11,1));

