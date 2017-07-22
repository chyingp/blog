01.cpp: 13k

编译：`emcc 01.cpp -s WASM=1 -O3`

```cpp
int main(int argc, char ** argv) {

}
```

```bash
[root@izj6cbkig1it52cwalb1twz compare-file-size]# emcc 01.cpp -s WASM=1 -O3 -o 01.html
[root@izj6cbkig1it52cwalb1twz compare-file-size]# ll -h
total 168K
-rw-r--r-- 1 root root   46 Jul 17 23:53 01.cpp
-rw-r--r-- 1 root root 101K Jul 17 23:55 01.html
-rw-r--r-- 1 root root  43K Jul 17 23:55 01.js
-rw-r--r-- 1 root root  13K Jul 17 23:55 01.wasm
```

02.cpp：172k

```cpp
#include <iostream>
using namespace std;

int main(int argc, char ** argv) {
  string str = "Hello World";
  cout << str;
}
```

```bash
[root@izj6cbkig1it52cwalb1twz compare-file-size]# emcc 02.cpp -s WASM=1 -O3 -o 02.html
[root@izj6cbkig1it52cwalb1twz compare-file-size]# ll -h 02.*
-rw-r--r-- 1 root root  124 Jul 18 00:05 02.cpp
-rw-r--r-- 1 root root 101K Jul 18 00:05 02.html
-rw-r--r-- 1 root root 136K Jul 18 00:05 02.js
-rw-r--r-- 1 root root 172K Jul 18 00:05 02.wasm
```

03.cpp: 172k

```cpp
#include <iostream>
using namespace std;

int main(int argc, char ** argv) {
  cout << "hello";
}
```

```bash
emcc 03.cpp -s WASM=1 -O3 -o 03.html
```

```bash
[root@izj6cbkig1it52cwalb1twz compare-file-size]# ll -h 03.*
-rw-r--r-- 1 root root   98 Jul 18 00:16 03.cpp
-rw-r--r-- 1 root root 101K Jul 18 00:16 03.html
-rw-r--r-- 1 root root 136K Jul 18 00:16 03.js
-rw-r--r-- 1 root root 172K Jul 18 00:16 03.wasm
```


04.cpp: 13k

```cpp
#include <iostream>
using namespace std;

int main(int argc, char ** argv) {

}
```

```bash
[root@izj6cbkig1it52cwalb1twz compare-file-size]# emcc 04.cpp -s WASM=1 -O3 -o 04.html
[root@izj6cbkig1it52cwalb1twz compare-file-size]# ll -h 04.*
-rw-r--r-- 1 root root   80 Jul 18 00:19 04.cpp
-rw-r--r-- 1 root root 101K Jul 18 00:19 04.html
-rw-r--r-- 1 root root  43K Jul 18 00:19 04.js
-rw-r--r-- 1 root root  13K Jul 18 00:19 04.wasm
```

bs.cpp: 172.k

```cpp
#include <string>
#include <iconv.h>
#include <time.h>
#include <vector>
#include <map>
#include "math.h"
#include <iostream>

using namespace std;


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

int main(int argc, char ** argv) {
    float ret = NHCalcCall(5899.2, 0.06, 0.06, 5898.8, 0.0054);
    cout << ret;
}
```

```bash
emcc bs.cpp -s WASM=1 -O3 -o hello.html
```

```bash
[root@izj6cbkig1it52cwalb1twz bs-to-swam]# ll -h hello.*
-rw-r--r-- 1 root root 101K Jul 18 00:07 hello.html
-rw-r--r-- 1 root root 133K Jul 18 00:07 hello.js
-rw-r--r-- 1 root root 172K Jul 18 00:07 hello.wasm
```


## 对比：尺寸惊人

待探究：唯一的差别就是代码二多了`cout << ret;`这句。

代码一：14k

```
int main(int argc, char ** argv) {
    float ret = NHCalcCall(5899.2, 0.06, 0.06, 5898.8, 0.0054);
}
```

代码二：172k

```
int main(int argc, char ** argv) {
    float ret = NHCalcCall(5899.2, 0.06, 0.06, 5898.8, 0.0054);
    cout << ret;
}
```