## FLV中H.265的支持

[FLV规范](https://ivweb.io/article.html?_id=100421#Video%20tags)中，并没有对H.265视频格式的支持做出明确说明。通过阅读规范，发现可以通过对CodeID进行扩展来支持H.265。具体采用什么CodeID、视频如何进行封装，各家厂商并没有达成统一。

比如腾讯云采用0x0C来标识视频位H.265，下面就通过简单的示例代码来对视频格式进行检测。

## 解析示例代码

首先，下载H.265的视频

```bash
curl 视频流地址 > video_h265.flv
```

接着，运行如下代码对保存到本地的FLV视频文件进行解析。例子比较简单，包含两步：

1. 解析获得video tag
2. 进一步对video tag进行解析，判断视频是H.265，还是H.264

```javascript
const fs = require('fs');
const filepath = './video_h265.flv'; // 这里可以替换下地址
const chunk = fs.readFileSync(filepath);

/**
 * 解析flv视频流
 * @param {Buffer} chunk flv视频流
 */
function parseFLV(chunk) {
    const AUDIO_TAG = 0x08;
    const VIDEO_TAG = 0x09;
    const SCRIPT_TAG = 0x12;
    const FLV_HEADER_SIZE = 9; // flv header大小，单位是字节
    const PREV_TAG_SIZE = 4; // 前一个flv tag大小，单位是字节  
    
    let offset = FLV_HEADER_SIZE + PREV_TAG_SIZE;

    while (offset < chunk.byteLength) {

        if (offset + 11 + 4 > chunk.byteLength) {
            break;
        }
        
        const dataView = new DataView(chunk, offset);        
        const tagType = dataView.getUint8(0); // flv tag 类型
        const tagDataSize =  dataView.getUint32(0, false) & 0x00FFFFFF; // flv tag data size，24位

        switch(tagType) {
            case AUDIO_TAG:
                console.log(`AUDIO_TAG found.`);
                break;
            case VIDEO_TAG:
                const videoType = getVideoType(chunk, offset + 11);
                console.log(`VIDEO_TAG found, video type is ${videoType}`);
                break;
            case SCRIPT_TAG:
                console.log(`SCRIPT_TAG found.`);
                break;
            default:
                // doing nothing
                break;
        }
        offset += 11 + tagDataSize + 4;
    }
}

/**
 * 视频是否H.655
 * @param {ArrayBuffer} chunk 视频二进制流
 * @param {Number} offset 
 * @returns {String} h265 或 h264
 */
function getVideoType(chunk, offset) {
    const VIDEO_H264 = 'h264';
    const VIDEO_H265 = 'h265';
    const H265_CODE_ID = 0x0c;
    const codeId = new Uint8Array(chunk, offset, 1)[0] & 15;
    
    return codeId === H265_CODE_ID ? VIDEO_H265 : VIDEO_H264;
}

parseFLV(chunk.buffer);
```

## 参考链接

[FLV协议简介](https://ivweb.io/article.html?_id=100421)
[flv.js](https://github.com/bilibili/flv.js)