const moment = require('moment');

//new Date(1995, 11, 17, 3, 24, 0)

// const zeroPad = (num, places) => String(num).padStart(places, '0')
//
// console.log(zeroPad(5, 2)); // "05"
// console.log(zeroPad(5, 4)); // "0005"
// console.log(zeroPad(5, 6)); // "000005"
// console.log(zeroPad(1234, 2)); // "1234"

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

let m = moment(`${(2013).pad(4)}${(3).pad()}${(1).pad()}`,'YYYYMMDD')
console.log(m.year())
console.log(m.month()+1)
console.log(m.date())
console.log(JSON.stringify({y:m.year(), m:m.month() + 1, d:m.date(), t:m.hour()}))

