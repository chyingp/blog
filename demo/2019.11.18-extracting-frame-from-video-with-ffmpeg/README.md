首先，抓取一段h265视频流，伪代码如下

```
curl https://[h265视频流地址] > h265.flv
```


分析视频的基础信息

```bash
ffmpeg -i h265.flv
```

输出如下，视频宽高 1280 * 720，帧率约为 60。

```bash
Input #0, flv, from 'h265.flv':
  Metadata:
    encoder         : Lavf57.56.101
  Duration: 00:00:00.00, start: 0.016000, bitrate: N/A
    Stream #0:0: Audio: aac (LC), 44100 Hz, stereo, fltp
    Stream #0:1: Video: hevc (Main), yuv420p(tv), 1280x720 [SAR 1:1 DAR 16:9], 62.50 fps, 62 tbr, 1k tbn, 62 tbc
```

提取图片帧

```bash
mkdir outputs
ffmpeg -i h265.flv ./outputs/frame%04d.jpg -hide_banner
```

如果是要提取所有关键帧

```bash
mkdir outputs-keyframe
ffmpeg -i h265.flv -vf "select=eq(pict_type\,I)" -vsync vfr ./outputs-keyframe/%04d.jpg -hide_banner
```

