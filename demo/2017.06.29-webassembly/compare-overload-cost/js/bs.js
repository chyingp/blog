/*
 * 关于精度:
 * 1、中间数据小数位不截取
 * 2、波动率：6位
 * 3、期权价格：3位小数
 * 4、期权有效期：按1处理，例如 15/365=0.04109589？
 * */

var PI = 3.14159265358979323846264338328;

function Normal(z) {
    var temp;
    temp = Math.exp((-1) * z * z / 2) / Math.sqrt(2 * PI);
    return temp;
}


/* 返回标准正态分布的累积函数，该分布的平均值为 0，标准偏差为 1。                           */
/***************************************************************/
function NormSDist(z) {
    // this guards against overflow
    if (z > 6) return 1;
    if (z < -6) return 0;

    var gamma = 0.231641900,
        a1 = 0.319381530,
        a2 = -0.356563782,
        a3 = 1.781477937,
        a4 = -1.821255978,
        a5 = 1.330274429;

    var k = 1.0 / (1 + Math.abs(z) * gamma);
    var n = k * (a1 + k * (a2 + k * (a3 + k * (a4 + k * a5))));
    n = 1 - Normal(z) * n;
    if (z < 0)
        return 1.0 - n;

    return n;
}

/**
 * D1
 * param dprice-当前标的价格                S
 * param dsigma-年波动率  < 1.0            σ(sigma)
 * param driskfreerate-无风险利率          r
 * param dtargetprice-执行价（元）         X
 * param dT_t-到期时间(年)                T_t
 * return double-D1
 */
function CalcD1(dprice, dsigma, dtargetprice, dT_t) {
    var L01 = Math.log(dprice / dtargetprice);
    var L02 = (Math.pow(dsigma, 2) / 2) * dT_t;
    var L03 = dsigma * Math.sqrt(dT_t);
    var d1 = (L01 + L02) / L03;

    return d1;
}

/**
 * D2
 * param d1-d1值
 * param dsigma-年波动率  < 1.0            σ(sigma)
 * param dT_t-到期时间(年)                T_t
 * return double-D2
 */
function CalcD2(d1, dsigma, dT_t) {
    var L03 = dsigma * Math.sqrt(dT_t);
    var d2 = d1 - L03;

    return d2;
}

/**
 * 求取正态分布值
 * param dvalue-参数值
 * return 0-成功，非0-失败
 */
function Nd(dvalue) {
    var dv = NormSDist(dvalue);
    return dv;
}


/**
 * 认购期权理论价
 * param dprice-当前标的价格                S
 * param dsigma-年波动率  < 1.0            σ(sigma)
 * param driskfreerate-无风险利率          r
 * param dtargetprice-执行价（元）         X
 * param dT_t-到期时间(年)                T_t
 * return double-认购期权理论价
 */
function CalcCall(dprice, dsigma, driskfreerate, dtargetprice, dT_t) {

    var d1 = CalcD1(dprice, dsigma, dtargetprice, dT_t);
    var d2 = CalcD2(d1, dsigma, dT_t);
    var Nd1 = Nd(d1);
    var Nd2 = Nd(d2);

    var dResult = dprice * Math.exp(-1 * driskfreerate * dT_t) * Nd1 - dtargetprice * Math.exp(-1 * driskfreerate * dT_t) * Nd2;

    // console.log("============== CalcCall =================");
    // console.log("d1",d1);
    // console.log("d2",d2);
    // console.log("Nd1",Nd1);
    // console.log("Nd2",Nd2);
    return dResult;
}


/**
 * 认沽期权理论价
 * param dprice-当前标的价格                S
 * param dsigma-年波动率  < 1.0            σ(sigma)
 * param driskfreerate-无风险利率          r
 * param dtargetprice-执行价（元）         X
 * param dT_t-到期时间(年)                T_t
 * return double-认沽期权理论价
 */
function CalcPut(dprice, dsigma, driskfreerate, dtargetprice, dT_t) {
    var d1 = CalcD1(dprice, dsigma, dtargetprice, dT_t);
    var d2 = CalcD2(d1, dsigma, dT_t);
    var Nd1 = Nd(-1 * d1);
    var Nd2 = Nd(-1 * d2);

    var dResult = dtargetprice * Math.exp(-1 * driskfreerate * dT_t) * Nd2 - dprice * Math.exp(-1 * driskfreerate * dT_t) * Nd1;

    // console.log("============== CalcPut =================");
    // console.log("d1",d1);
    // console.log("d2",d2);
    // console.log("Nd1",Nd1);
    // console.log("Nd2",Nd2);
    return dResult;
}

var NHCalcCall = CalcCall;
var NHCalcPut = CalcPut;

// calc = {};
// calc.CalcCall = CalcCall;
// calc.CalcPut = CalcPut;
// module.exports = calc;