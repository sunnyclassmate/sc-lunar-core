var moment = require('moment');
var cc = require('./lunar-converter');

const COLLECTION_MINUTE = 30;     //30분 보정

/***
 * 날짜를 입력받아서, 한국 만세력용 날짜와 시간으로 변경한다.
 * @param date YYYYMMDDHHmm
 */
var fixKoreaDt = (date) => {
    date =  date || moment().format('YYYYMMDDHHmm');
    // console.log(`date: ${JSON.stringify(date)}`)

    let korDt = moment(date, 'YYYYMMDDHHmm').subtract({'minutes': COLLECTION_MINUTE})
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    return {y:korDt.year(), m:korDt.month()+1, d:korDt.date(), t: korDt.hour()}
}

/***
 * 양력 날짜를 입력받아서, 음력날짜로 변환한다.
 * @param date 날짜 YYYYMMDDHHmm ex> 199912312359
 */
var solar2Lunar =  (date) => {
    let korDt = fixKoreaDt(date)
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    let r = cc.solar2Lunar(korDt.y, korDt.m, korDt.d)
    r.t = korDt.t
    // console.log(`lunar: ${JSON.stringify(r)}`)

    return r;
}

var lunar2Solar =  (date) => {

    let korDt = fixKoreaDt(date)
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    let r = cc.lunar2Solar(korDt.y, korDt.m, korDt.d)
    r.t = korDt.t
    // console.log(`solar: ${JSON.stringify(r)}`)

    return r;
}

let getValidPrevLunarDate = (y, m, d, t) => {

}

let getValidNextLunarDate = (y, m, d, t) => {

}


let getValidChasamLunar = (y, m, d, t) => {
	return (t < 12 )
			? getValidNextLunarDate(y, m, d, t)
			: getValidNextLunarDate(y, m, d, t);
}

let getValidLunar = (date) => {
    let korDt = fixKoreaDt(date)
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    return getValidChasamLunar(korDt.y, korDt.m, korDt.d, korDt.t);
}


module.exports = {
    fixKoreaDt: fixKoreaDt,
    solar2Lunar: solar2Lunar,
    lunar2Solar: lunar2Solar,
    getValidLunar: getValidLunar,
}