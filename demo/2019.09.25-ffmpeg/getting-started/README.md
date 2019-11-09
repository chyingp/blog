## 编译命令

```bash
#!/bin/bash

FFMPEG_PATH="/usr/local/Cellar/ffmpeg/4.1.1"

gcc -I${FFMPEG_PATH}/include/ \
    -L${FFMPEG_PATH}/lib \
    -lavcodec -lavformat -lavutil -lavdevice -lswscale \
    main.c -o main
```

## 程序说明

main.c 中的 h265.flv 自行网上下载

代码出处：https://www.cnblogs.com/CoderTian/p/6791638.html