```bash
 emcc --bind -o bs.js -O3 bs.cpp
```

emcc ./bs.cpp -o bs.js -s EXPORTED_FUNCTIONS="['NHCalcCall']"  