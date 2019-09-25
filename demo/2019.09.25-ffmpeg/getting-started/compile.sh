#!/bin/bash

FFMPEG_PATH="/usr/local/Cellar/ffmpeg/4.1.1"

gcc -I${FFMPEG_PATH}/include/ \
    -L${FFMPEG_PATH}/lib \
    -lavcodec -lavformat -lavutil -lavdevice -lswscale \
    main.c -o main