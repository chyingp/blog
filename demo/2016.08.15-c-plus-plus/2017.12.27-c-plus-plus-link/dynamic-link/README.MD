```bash
g++ -fPIC -c math.cpp
g++ -shared -o libdymath.so dymath.o
g++ -shared -o libdymath.so math.o
g++ main.cpp -L . -l dymath
./a.out
```