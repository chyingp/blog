#!/bin/bash

FFMPEG_INCLUDE_PATH='/usr/local/include/'
FFMPEG_LIB_PATH='/usr/local/lib/'


gcc -I${FFMPEG_INCLUDE_PATH} \
    -L${FFMPEG_LIB_PATH} \
    -lavcodec -lavformat -lavutil -lavdevice -lswscale \
    -framework AudioToolbox \
    -framework VideoToolbox \
    -framework AudioToolBox \
    -framework CoreGraphics \
    -framework CoreMedia \
    -framework openal \
    -framework mediaToolbox \
    -framework VideoToolBox \
    -framework accelerate \
    -framework libiconv \
    -framework OpenGLles \
    -framework QuartCore \
    -framework libiconv.2.4.0 \
    -framework libbz2.1.0 \
    main.c -o main