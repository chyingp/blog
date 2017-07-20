```bash
 emcc --bind -o bs.js -O3 bs.cpp
```

emcc ./bs.cpp -o bs.js -O3 -s EXPORTED_FUNCTIONS="['_NHCalcCall']" 