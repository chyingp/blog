```bash
g++ -c math.cpp
ar -crv libmath.a  math.o
g++ main.cpp -L . -l math
```