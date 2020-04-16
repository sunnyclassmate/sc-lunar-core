var moment = require('moment');
var cc = require('./lunar-converter');

const COLLECTION_MINUTE = 30;     //30분 보정

/***
 * 날짜를 입력받아서, 한국 만세력용 날짜와 시간으로 변경한다.
 * @param date YYYYMMDDHHmm
 */
var fixKoreaDt = (date) => {
    date = date || moment().format('YYYYMMDDHHmm');
    // console.log(`date: ${JSON.stringify(date)}`)

    let korDt = moment(date, 'YYYYMMDDHHmm').subtract({'minutes': COLLECTION_MINUTE})
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    return {y: korDt.year(), m: korDt.month() + 1, d: korDt.date(), t: korDt.hour()}
}

/***
 * 양력 날짜를 입력받아서, 음력날짜로 변환한다.
 * @param date 날짜 YYYYMMDDHHmm ex> 199912312359
 */
var solar2Lunar = (date) => {
    let korDt = fixKoreaDt(date)
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    let r = cc.solar2Lunar(korDt.y, korDt.m, korDt.d)
    r.t = korDt.t
    // console.log(`lunar: ${JSON.stringify(r)}`)

    return r;
}

/***
 * 음력날짜를 입력받아서, 양력날짜로 변환한다.
 * 음력날짜가 잘못되었을때도 보정하여 알맞은 값을 구한다.
 * @param date
 * @returns {{d: *, y: *, m: *}}
 */
var lunar2Solar = (date) => {

    let korDt = fixKoreaDt(date)
    // console.log(`korDt: ${JSON.stringify(korDt)}`)

    let lunar = getValidLunarDate(korDt.y, korDt.m, korDt.d, korDt.t);

    let r = cc.lunar2Solar(lunar.y, lunar.m, lunar.d)
    r.t = lunar.t
    // console.log(`lunar: ${JSON.stringify(r)}`)

    return r;
}

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

let convert2moment = (y, m, d, t) => {
    return moment(`${(y).pad(4)}${(m).pad()}${(d).pad()}${(t).pad()}`, 'YYYYMMDDHH')
}

let getValidPrevLunarDate = (y, m, d, t) => {
    let getPrevDate = (y, m, d, t) => {
        m = moment(`${(y).pad(4)}${(m).pad()}${(d).pad()}${(t).pad()}`, 'YYYYMMDDHH').subtract(1, 'day');
        console.log(JSON.stringify({y: m.year(), m: m.month() + 1, d: m.date(), t: m.hour()}))
        return {y: m.year(), m: m.month() + 1, d: m.date(), t};
    }

    y = y || 1900;
    m = m || 1;
    d = d || 1;

    let n = {y: y, m: m, d: d, t: t}
    while (true) {
        n = getPrevDate(n.y, n.m, n.d, n.t);
        if (cc.isValidLunar(n.y, n.m, n.d)) {
            return n;
        }
    }
}

let getValidNextLunarDate = (y, m, d, t) => {
    let getNextDate = (y, m, d, t) => {
        m = moment(`${(y).pad(4)}${(m).pad()}${(d).pad()}${(t).pad()}`, 'YYYYMMDDHH').add(1, 'day');
        console.log(JSON.stringify({y: m.year(), m: m.month() + 1, d: m.date(), t: m.hour()}))
        return {y: m.year(), m: m.month() + 1, d: m.date(), t};
    }

    y = y || 1900;
    m = m || 1;
    d = d || 1;

    let n = {y: y, m: m, d: d, t: t}
    while (true) {
        n = getNextDate(n.y, n.m, n.d, n.t);
        if (cc.isValidLunar(n.y, n.m, n.d)) {
            return n;
        }
    }
}

/***
 * 유효하지 않은 음력날짜에 대해서, 가장 가까운? 음력날짜를 구한다.
 *
 * 유효하지 않는 음력날짜의 경우 오전이면 가장 가까운 유효한 이전날짜를 반환한다.
 * 유효하지 않는 음력날짜의 경우 오후면 가장 가까운 유효한 다음날짜를 반환한다.
 * ex> 198310311130 -> 198310291130, 198310311330 -> 198311011330
 * @param y
 * @param m
 * @param d
 * @param t
 * @returns {{d: (*|number), t: *, y: (*|number), m: (*|number)}|undefined|{d: *, t: *, y: *, m: *}}
 */
let getValidLunarDate = (y, m, d, t) => {

    if (cc.isValidLunar(y, m, d))
        return {y: y, m: m, d: d, t: t}

    return (t < 12)
        ? getValidPrevLunarDate(y, m, d, t)
        : getValidNextLunarDate(y, m, d, t);
}


module.exports = {
    fixKoreaDt: fixKoreaDt,
    solar2Lunar: solar2Lunar,
    lunar2Solar: lunar2Solar,
    getCanchi: cc.getCanchi
}