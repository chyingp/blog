#!/bin/bash

# 这里改成本地ffmpeg的地址
# FFMPEG_PATH="/Users/casperchen/Documents/develop/github/ffmpeg/"
# FFMPEG_INCLUDE_PATH='/usr/local/include/'
FFMPEG_LIB_PATH='/usr/local/lib/'

# FFMPEG_INCLUDE_PATH='/usr/local/Cellar/ffmpeg/4.2.1/include/'
# FFMPEG_LIB_PATH='/usr/local/Cellar/ffmpeg/4.2.1/lib/'

# FFMPEG_INCLUDE_PATH='/Users/casperchen/Documents/develop/github/ffmpeg-lib/include/'
# FFMPEG_LIB_PATH='/Users/casperchen/Documents/develop/github/ffmpeg-lib/lib/'
# /usr/local/Cellar/libvorbis/1.3.6/lib/:
# /usr/local/Cellar/theora/1.1.1/lib/:
export LIBRARY_PATH=/usr/local/lib/:/usr/local/Cellar/lame/3.100/lib/:${FFMPEG_LIB_PATH}

# -I${FFMPEG_INCLUDE_PATH} \

gcc \
    -framework AudioToolBox \
    -framework VideoToolbox \
    -framework CoreFoundation \
    -framework CoreMedia \
    -framework CoreVideo \
    -framework Security \
    -framework VideoDecodeAcceleration \
    -lavcodec \
    -lavformat \
    -lavutil \
    -lavdevice \
    -lswscale \
    -lfdk-aac \
    -lz \
    -liconv \
    -lopus \
    -llzma \
    -lopus \
    -lswresample \
    -ltheora \
    -lmp3lame \
    -lvorbis \
    -lvpx \
    -lx264 \
    -lxvidcore \
    -lx265 \
    -lvorbisenc \
    -lbz2.1.0 \
    main.c -o main

    # -framework libbz2.dylib \
    # -framework libiconv.dylib \

# gcc -I${FFMPEG_INCLUDE_PATH} \
#     -L${FFMPEG_LIB_PATH} \
#     -lavcodec -lavformat -lavutil -lavdevice -lswscale \
#     main.c -o main