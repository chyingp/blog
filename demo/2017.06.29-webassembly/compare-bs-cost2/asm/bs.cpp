#include <string>
#include <iconv.h>
#include <time.h>
#include <vector>
#include <map>
#include "math.h"
#include <emscripten/bind.h>

using namespace emscripten;

const double PI = 3.14159265358979323846264338328;

inline double Normal(double z)
{
	double temp;
	temp = exp((-1)*z*z / 2) / sqrt(2 * PI);
	return temp;
}

inline double NormSDist(const double z)
{	
	if (z > 6) return 1;
	if (z < -6) return 0;

	static const double gamma = 0.231641900,
		a1 = 0.319381530,
		a2 = -0.356563782,
		a3 = 1.781477937,
		a4 = -1.821255978,
		a5 = 1.330274429;

	double k = 1.0 / (1 + fabs(z) * gamma);
	double n = k * (a1 + k * (a2 + k * (a3 + k * (a4 + k * a5))));
	n = 1 - Normal(z) * n;
	if (z < 0)
		return 1.0 - n;

	return n;
}

inline double NHCalcD1(double dprice, double dsigma, double driskfreerate, double dtargetprice, double dT_t)
{
	double L01 = log(dprice / dtargetprice);
	double L02 = (pow(dsigma, 2) / 2)*dT_t;
	double L03 = dsigma*sqrt(dT_t);
	double d1 = (L01 + L02) / L03;
	return d1;
}

inline double CalcD2(double d1, double dsigma, double dT_t)
{
	double L03 = dsigma*sqrt(dT_t);
	double d2 = d1 - L03;
	return d2;
}

inline double Nd(double dvalue)
{
	double dv = NormSDist(dvalue);
	return dv;
}

inline double NHCalcCall(double dprice, double dsigma, double driskfreerate, double dtargetprice, double dT_t)
{
	double d1 = NHCalcD1(dprice, dsigma, driskfreerate, dtargetprice, dT_t);
	double d2 = CalcD2(d1, dsigma, dT_t);
	double Nd1 = Nd(d1);
	double Nd2 = Nd(d2);
	double dResult = dprice*exp(-1 * driskfreerate*dT_t)*Nd1 - dtargetprice*exp(-1 * driskfreerate*dT_t)*Nd2;

	return dResult;
}

inline double NHCalcPut(double dprice, double dsigma, double driskfreerate, double dtargetprice, double dT_t)
{
	double d1 = NHCalcD1(dprice, dsigma, driskfreerate, dtargetprice, dT_t);
	double d2 = CalcD2(d1, dsigma, dT_t);
	double Nd1 = Nd(((-1)*d1));
	double Nd2 = Nd(((-1)*d2));
	double dResult = dtargetprice*exp(-1 * driskfreerate*dT_t)*Nd2 - dprice*exp(-1 * driskfreerate*dT_t)*Nd1;

	return dResult;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("NHCalcCall", &NHCalcCall);
}