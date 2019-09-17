const fs = require('fs');
const filepath = './video_h265.flv';
const chunk = fs.readFileSync(filepath);

// const AUDIO_TAG = 0x08;
// const VIDEO_TAG = 0x09;
// const SCRIPT_TAG = 0x12;

// const FLV_HEADER_SIZE = 9; // flv header大小，单位是字节
// const PREV_TAG_SIZE = 4; // 前一个flv tag大小，单位是字节

// const _littleEndian = (function () {
//     let buf = new ArrayBuffer(2);
//     (new DataView(buf)).setInt16(0, 256, true);  // little-endian write
//     return (new Int16Array(buf))[0] === 256;  // platform-spec read, if equal then LE
// })();

function parseData(chunk) {    
    
    
    // flv header
    const flvHeaderBuff = chunk.slice(0, FLV_HEADER_SIZE);    

    // flv body
    const flvBodyBuff = chunk.slice(FLV_HEADER_SIZE);

    // tags
    const flvBodyBuffLen = flvBodyBuff.byteLength;
    // let offset = PREV_TAG_SIZE;
    let offset = FLV_HEADER_SIZE + PREV_TAG_SIZE;

    while (offset <= chunk.byteLength) {
        const dataView = new DataView(chunk.buffer, offset);        
        const tagType = dataView.getUint8(0); // flv tag 类型
        const tagDataSize =  dataView.getUint32(0, false) & 0x00FFFFFF; // flv tag data size，24位
        
        switch(tagType) {
            case AUDIO_TAG:
                console.log(`AUDIO_TAG found.`);
                break;
            case VIDEO_TAG:
                console.log(`VIDEO_TAG found.`);
                break;
            case SCRIPT_TAG:
                console.log(`SCRIPT_TAG found.`);
                break;    
        }
        offset += 11 + tagDataSize + 4;
    }
}

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
                // console.log(`SCRIPT_TAG found.`);
                break;
            default:
                // doing nothing...
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