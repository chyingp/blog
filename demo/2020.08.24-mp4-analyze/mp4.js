const fs = require('fs');

const filepath = './flower.mp4';
const BYTES_READ_PER_TIME = 1024 * 1024 * 2; // 每次读取的字节数
const OPEN_FLAGS = 'r';

const fd = fs.openSync(filepath, OPEN_FLAGS);
const buff = Buffer.alloc(BYTES_READ_PER_TIME);

fs.read(fd, buff, 0, BYTES_READ_PER_TIME, 0, function (err, bytesRead, buffer) {
	// console.log(`bytesRead is ${bytesRead}, buffer.byteLength == ${buffer.byteLength}`);
	// console.log(buffer.toString());
	// getBoxes(buffer);
	// new Movie(buffer);
	// console.log(buffer.readUInt32BE(0));
	const movie = new Movie( buffer.slice(0, bytesRead) );
	// console.log(movie);
});

function getInnerBoxes(buffer) {
	let boxes = [];
	let offset = 0;
	let totalByteLen = buffer.byteLength;

	do {
		let size = buffer.readUInt32BE(offset); // 4个字节
		let type = buffer.slice(offset + 4, offset + 8).toString(); // 4个字节		

		if (size === 1) {
			size = buffer.readUIntBE(offset + 8, 8); // 8个字节，largeSize
		} else if (size === 0) {
			// last box
		}

		let boxBuffer = buffer.slice(offset, offset + size);

		boxes.push({
			type: type,
			size: size,
			buffer: boxBuffer
		});

		offset += size;
		
		// console.log(`size: ${size}, type: ${type}, offset: ${offset}, totalByteLen: ${totalByteLen}`);

	} while(offset < totalByteLen);

	return boxes;
}

/*
	aligned(8) class Box (unsigned int(32) boxtype, optional unsigned int(8)[16] extended_type) {
		unsigned int(32) size;
		unsigned int(32) type = boxtype;
		if (size==1) {
			unsigned int(64) largesize;
		} else if (size==0) {
			// box extends to end of file
		}
		if (boxtype==‘uuid’) {
			unsigned int(8)[16] usertype = extended_type;
		}
	}
*/
class Box {
	constructor(boxType, extendedType, buffer) {
		this.type = boxType; // 必选，字符串，4个字节，box类型
		this.size = 0; // 必选，整数，4个字节，box的大小，单位是字节
		this.headerSize = 8; // 
		this.boxes = [];

		// this.largeSize = 0; // 可选，8个字节
		// this.extendedType = extendedType || boxType; // 可选，16个字节
		this._initialize(buffer);
	}

	_initialize(buffer) {				
		this.size = buffer.readUInt32BE(0); // 4个字节
		this.type = buffer.slice(4, 8).toString(); // 4个字节

		let offset = 8;

		if (this.size === 1) {
			this.size = buffer.readUIntBE(8, 8); // 8个字节，largeSize
			this.headerSize += 8;
			offset = 16;
		} else if (this.size === 1) {
			// last box
		}

		if (this.type === 'uuid') {
			this.type = buffer.slice(offset, 16); // 16个字节
			this.headerSize += 16;
		}
	}

	setInnerBoxes(buffer) {
		const innerBoxes = getInnerBoxes(buffer.slice(this.headerSize, this.headerSize + this.size));

		innerBoxes.forEach(item => {
			const { type, buffer } = item;
			if (this[type]) {
				const box = this[type](buffer);
				this.boxes.push(box);					
			} else {
				// console.log(`unknowed type: ${type}`);
			}
		});
	}


	set(buffer) {
		// ...
	}
}

/*
	aligned(8) class FullBox(unsigned int(32) boxtype, unsigned int(8) v, bit(24) f) extends Box(boxtype) {
		unsigned int(8) version = v;
		bit(24) flags = f;
	}
*/
class FullBox extends Box {
	constructor(boxType, buffer) {
		super(boxType, '', buffer);

		const headerSize = this.headerSize;

		this.version = buffer.readUInt8(headerSize); // 必选，1个字节
		this.flags = buffer.readUIntBE(headerSize + 1, 3); // 必选，3个字节

		this.headerSize = headerSize + 4;
	}
}

class Movie {
	constructor(buffer) {

		this.boxes = [];

		const innerBoxes = getInnerBoxes(buffer);

		innerBoxes.forEach(item => {
			const { type, buffer } = item;
			if (this[type]) {
				const box = this[type](buffer);
				this.boxes.push(box);
			} else {
				// console.log(`unknowed type: ${type}`);
			}
		});

		// console.log(this.boxes);
	}

	ftyp(buffer) {
		return new FileTypeBox(buffer);
	}

	pdin() {
		return 'TODO pdin';
	}

	moov(buffer) {
		return new MovieBox(buffer);
	}

	mdat() {
		return 'TODO mdat';
	}
}

/*
	aligned(8) class FileTypeBox extends Box(‘ftyp’) {
		unsigned int(32) major_brand;
		unsigned int(32) minor_version;
		unsigned int(32) compatible_brands[];
	}
*/
class FileTypeBox extends Box {
	constructor(buffer) {
		super('ftyp', '', buffer);

		const headerSize = this.headerSize;

		this.majorBrand = buffer.slice(headerSize, headerSize + 4).toString(); // 必选，字符串，4个字节 
		this.minorVersion = buffer.readUInt32BE(headerSize + 4); // 必选，整数，4个字节
		this.compatibleBrands = []; // 必选，数组，每个元素4个字节，填充至box末尾

		for(let i = headerSize + 8; i < this.size; i = i + 4) {
			const compatibleBrand = buffer.slice(i, i + 4).toString();
			this.compatibleBrands.push(compatibleBrand);
		}
		// console.log(this);
	}
}

/*
	aligned(8) class MovieBox extends Box(‘moov’){ }
*/
class MovieBox extends Box {
	constructor(buffer) {
		super('moov', '', buffer);
		this.setInnerBoxes(buffer);
	}

	mvhd(buffer) {
		return new MovieHeaderBox(buffer);
	}

	trak(buffer) {
		return new TrackBox(buffer);
	}
}

/*

	aligned(8) class MovieHeaderBox extends FullBox(‘mvhd’, version, 0) { 
		if (version==1) {
			unsigned int(64)  creation_time;
			unsigned int(64)  modification_time;
			unsigned int(32)  timescale;
			unsigned int(64)  duration;
		} else { // version==0
			unsigned int(32)  creation_time;
			unsigned int(32)  modification_time;
			unsigned int(32)  timescale;
			unsigned int(32)  duration;
		}
		template int(32) rate = 0x00010000; // typically 1.0
		template int(16) volume = 0x0100; // typically, full volume const bit(16) reserved = 0;
		const unsigned int(32)[2] reserved = 0;
		template int(32)[9] matrix = { 0x00010000,0,0,0,0x00010000,0,0,0,0x40000000 }; // Unity matrix
		bit(32)[6]  pre_defined = 0;
		unsigned int(32)  next_track_ID;
	}
*/
class MovieHeaderBox extends FullBox {
	constructor(buffer) {
		super('mvhd', buffer);

		const headerSize = this.headerSize;
		let offset = 0;

		if (this.version === 1) {
			this.creation_time = buffer.readUIntBE(headerSize, 8);
			this.modification_time = buffer.readUIntBE(headerSize + 8, 8);
			this.timescale = buffer.readUInt32BE(headerSize + 16, 4);
			this.duration = buffer.readUIntBE(headerSize + 20, 8);
			offset = headerSize + 28;
		} else {
			this.creation_time = buffer.readUInt32BE(headerSize);
			this.modification_time = buffer.readUInt32BE(headerSize + 4);
			this.timescale = buffer.readUInt32BE(headerSize + 8);
			this.duration = buffer.readUInt32BE(headerSize + 12);
			offset = headerSize + 16;
		}

		this.rate = buffer.readUInt16BE(offset) + buffer.readUInt16BE(offset + 2)/10; // 4个字节，按照 16.16 来解析，默认 0x00010000
		this.volume = buffer.readUInt8(offset + 4) + buffer.readUInt8(offset + 5); // 2个字节，按照 8.8 来解析，默认0x0100
		
		// 接下来6个字节是保留用途
		// const bit(16) reserved = 0;
		// const unsigned int(32)[2] reserved = 0;
		
		this.matrix = [
			// buffer.readUInt32BE(offset + 12),
			buffer.readUInt32BE(offset + 16),
			buffer.readUInt32BE(offset + 20),
			buffer.readUInt32BE(offset + 24),
			buffer.readUInt32BE(offset + 28),
			buffer.readUInt32BE(offset + 32),
			buffer.readUInt32BE(offset + 36),
			buffer.readUInt32BE(offset + 40),
			buffer.readUInt32BE(offset + 44),
			buffer.readUInt32BE(offset + 48),
		];

		const preDefinedBytes = 32 * 6 / 8;
		this.pre_defined = buffer.slice(offset + 52, offset + 52 + preDefinedBytes); // 
		this.next_track_ID = buffer.readUInt32BE(offset + 52 + preDefinedBytes);
	}
}


/*
	aligned(8) class TrackBox extends Box(‘trak’) { }
*/
class TrackBox extends Box {
	constructor(buffer) {
		super('trak', '', buffer);

		this.setInnerBoxes(buffer);
		// console.log(this.boxes);
	}

	tkhd(buffer) {
		return new TrackHeaderBox(buffer);
	}

	edts(buffer) {
		return 'TODO edts';
	}

	mdia(buffer) {
		return new MediaBox(buffer);
	}
}

/*
	aligned(8) class TrackHeaderBox extends FullBox(‘tkhd’, version, flags){ 
		if (version==1) {
			unsigned int(64)  creation_time;
			unsigned int(64)  modification_time;
			unsigned int(32)  track_ID;
			const unsigned int(32)  reserved = 0;
			unsigned int(64)  duration;
	    } else { // version==0
			unsigned int(32)  creation_time;
			unsigned int(32)  modification_time;
			unsigned int(32)  track_ID;
			const unsigned int(32)  reserved = 0;
			unsigned int(32)  duration;
		}
		const unsigned int(32)[2] reserved = 0;
		template int(16) layer = 0;
		template int(16) alternate_group = 0;
		template int(16) volume = {if track_is_audio 0x0100 else 0}; const unsigned int(16) reserved = 0;
		template int(32)[9] matrix= { 0x00010000,0,0,0,0x00010000,0,0,0,0x40000000 }; // unity matrix
	   	unsigned int(32) width;
	   	unsigned int(32) height;
	}
*/
class TrackHeaderBox extends FullBox {
	constructor(buffer) {
		super('tkhd', buffer);

		const headerSize = this.headerSize;
		let offset = 0;

		if (this.version === 1) {
			this.creation_time = buffer.readUIntBE(headerSize, 8); // 8个字节
			this.modification_time = buffer.readUIntBE(headerSize + 8, 8); // 8个字节
			this.track_ID = buffer.readUInt32BE(headerSize + 16);
			// const unsigned int(32)  reserved = 0; // 预留4个字节
			this.duration = buffer.readUIntBE(headerSize + 24, 8); // 4个字节
			offset = headerSize + 32;
		} else {
			this.creation_time = buffer.readUInt32BE(headerSize); // 4个字节
			this.modification_time = buffer.readUInt32BE(headerSize + 4); // 4个字节
			this.track_ID = buffer.readUInt32BE(headerSize + 8);
			// const unsigned int(32)  reserved = 0; // 预留4个字节
			this.duration = buffer.readUInt32BE(headerSize + 16); // 4个字节
			offset = headerSize + 20;
		}
		
		// 请勿删，接下来8个字节是保留用途
		// const unsigned int(32)[2] reserved = 0; // 8个字节
		
		this.layer = buffer.readUInt16BE(offset + 8); // 2个字节
		this.alternate_group = buffer.readUInt16BE(offset + 10); // 2个字节
		this.volume = 'TODO'; // TODO 2个字节，根据是视频轨道，还是音频轨道，赋不同的值（需要先处理 hdlr，然后再回来处理这个值）

		// 请勿删，接下来2个字节是保留用途
		// const unsigned int(16) reserved = 0;

		offset += 16; // 加上

	   	// 36个字节：9个元素，每个元素4个字节
		this.matrix = [
			buffer.readInt32BE(offset),
			buffer.readInt32BE(offset + 4),
			buffer.readInt32BE(offset + 8),
			buffer.readInt32BE(offset + 12),
			buffer.readInt32BE(offset + 16),
			buffer.readInt32BE(offset + 20),
			buffer.readInt32BE(offset + 24),
			buffer.readInt32BE(offset + 28),
			buffer.readInt32BE(offset + 32)
		];
		this.width = buffer.readUInt32BE(offset + 36); // 4个字节
		this.height = buffer.readUInt32BE(offset + 40); // 4个字节		
	}
}

/*
	aligned(8) class MediaBox extends Box(‘mdia’) { }
*/
class MediaBox extends Box {
	constructor(buffer) {
		super('mdia', '', buffer);
		this.setInnerBoxes(buffer);
		// console.log(this.boxes);	
	}

	mdhd(buffer) {
		return new MediaHeaderBox(buffer);
	}

	hdlr(buffer) {
		return new HandlerBox(buffer);
	}

	minf(buffer) {
		return new MediaInformationBox(buffer);
	}
}


/*
	aligned(8) class MediaHeaderBox extends FullBox(‘mdhd’, version, 0) {
		if (version==1) {
		    unsigned int(64)  creation_time;
		    unsigned int(64)  modification_time;
		    unsigned int(32)  timescale;
		    unsigned int(64)  duration;
		} else { // version==0
			unsigned int(32)  creation_time;
			unsigned int(32)  modification_time;
			unsigned int(32)  timescale;
			unsigned int(32)  duration;
		}
		bit(1) pad=0;
		unsigned int(5)[3] language; // ISO-639-2/T language code unsigned 
		int(16) pre_defined = 0;
	}
*/
class MediaHeaderBox extends FullBox {
	constructor(buffer) {
		super('mdhd', buffer);

		const headerSize = this.headerSize;
		let offset = 0;

		if (this.version === 1) {
			this.creation_time = buffer.readUIntBE(headerSize, 8); // 8个字节，单位是秒
			this.modification_time = buffer.readUIntBE(headerSize + 8, 8); // 8个字节，单位是秒
			this.timescale = buffer.readUInt32BE(headerSize + 16); // 4个字节，每秒包含的时间单位（time units），比如1000
			this.duration = buffer.readUIntBE(headerSize + 20, 8); // 8个字节，duration/timescale 得到实际的时长（秒）
			offset = headerSize + 28;
		} else {
			this.creation_time = buffer.readUInt32BE(headerSize); // 8个字节
			this.modification_time = buffer.readUInt32BE(headerSize + 4); // 8个字节
			this.timescale = buffer.readUInt32BE(headerSize + 8);		
			this.duration = buffer.readUInt32BE(headerSize + 12); // 4个字节
			offset = headerSize + 16;
		}
		
		this.pad = 0; // 1 bit

		const codeDifferences = [ // 15 bits，3个元素，每个元素 5 bits，ISO-639-2/T language code unsigned 
			buffer.readUInt8(offset) >> 2,
			buffer.readUInt16BE(offset) >> 5 & 0b0000000000011111,
			buffer.readUInt8(offset + 1) & 0b00011111,
		];

		// Each character is packed as the difference between its ASCII value and 0x60. 
		// 举例，codeDifferences 为 [21, 14, 4]，则 language 为 ['u', 'n', 'd']
		this.language = codeDifferences.map(code => {
			return String.fromCharCode(code + 0x60);
		});

		// pad + language 共2个字节
		this.pre_defined = buffer.readUInt16BE(offset + 2); // 2个字节，预留

		// console.log(this);
	}
}

/*
	aligned(8) class HandlerBox extends FullBox(‘hdlr’, version = 0, 0) {
		unsigned int(32) pre_defined = 0;
		unsigned int(32) handler_type;
		const unsigned int(32)[3] reserved = 0;
	   	string name;
	}

	// 视频轨道
	HandlerBox {
		type: 'hdlr',
		size: 54,
		headerSize: 12,
		boxes: [],
		version: 0,
		flags: 0,
		pre_defined: 0,
		handler_type: 'vide',
		name: 'L-SMASH Video Handler\u0000' }
	
	// 音频轨道
	HandlerBox {
		type: 'hdlr',
		size: 54,
		headerSize: 12,
		boxes: [],
		version: 0,
		flags: 0,
		pre_defined: 0,
		handler_type: 'soun',
		name: 'L-SMASH Audio Handler\u0000' }	
*/
class HandlerBox extends FullBox {
	constructor(buffer) {
		super('hdlr', buffer);

		let offset = this.headerSize;

		this.pre_defined = buffer.readUInt32BE(offset); // 4个字节，预留
		
		// vide（video track），soun（audio track），hint（hint track）
		// 4个字节，表明是 video track、audio track 还是 hint track
		this.handler_type = buffer.slice(offset + 4, offset + 8).toString(); 

		// 12个字节，预留
		// const unsigned int(32)[3] reserved = 0;

		this.name = buffer.slice(offset + 20).toString();

		// console.log(this);
	}
}

/*
	aligned(8) class MediaInformationBox extends Box(‘minf’) { }

	video media header, overall information (video track only)
*/
class MediaInformationBox extends Box {
	constructor(buffer) {
		super('minf', '', buffer);
		this.setInnerBoxes(buffer);
		
		// console.log(this.boxes);
	}

	vmhd(buffer) {
		return new VideoMediaHeaderBox(buffer);
	}

	smhd(buffer) {
		return new SoundMediaHeaderBox(buffer);
	}

	hmhd(buffer) {
		return 'TODO hmhd';
	}

	dinf(buffer) {
		return 'TODO dinf';
	}

	stbl(buffer) {
		return new SampleTableBox(buffer);
	}
}

/*
	aligned(8) class VideoMediaHeaderBox extends FullBox(‘vmhd’, version = 0, 1) {
		template unsigned int(16) graphicsmode = 0; // copy, see below template 
		unsigned int(16)[3] opcolor = {0, 0, 0};
	}

	// 例子
	VideoMediaHeaderBox {
	    type: 'vmhd',
	    size: 20,
	    headerSize: 12,
	    boxes: [],
	    version: 0,
	    flags: 1,
	    graphicsmode: 0,
	    opcolor: [ 0, 0, 0 ] },	
*/
class VideoMediaHeaderBox extends FullBox {
	constructor(buffer) {		
		super('vmhd', buffer);

		this.version = 0;
		this.flags = 1;

		const offset = this.headerSize;

		this.graphicsmode = buffer.readUInt16BE(offset); // 2个字节，是枚举的值，目前只有0，表示直接对图像进行拷贝（相当于不做处理）

		this.opcolor = [ // 6个字节，TODO 这个字段干嘛的？
			buffer.readUInt16BE(offset + 2),
			buffer.readUInt16BE(offset + 4),
			buffer.readUInt16BE(offset + 6)
		];
	}
}


/*
	aligned(8) class SoundMediaHeaderBox extends FullBox(‘smhd’, version = 0, 0) {
	   template int(16) balance = 0;
	   const unsigned int(16)  reserved = 0;
	}

	// 例子：
	SoundMediaHeaderBox {
	    type: 'smhd',
	    size: 16,
	    headerSize: 12,
	    boxes: [],
	    version: 0,
	    flags: 0,
	    balance: 0 }
*/
class SoundMediaHeaderBox extends FullBox {
	constructor(buffer) {		
		super('smhd', buffer);

		this.version = 0;
		this.flags = 0;

		const offset = this.headerSize;

		// is a fixed-point 8.8 number that places mono audio tracks in a stereo space; 
		// 0 is center (thenormal value); full left is -1.0 and full right is 1.0.
		this.balance = buffer.readInt8(offset) + buffer.readInt8(offset + 1) / 10; // 2个字节

		// 预留，2个字节
		// const unsigned int(16)  reserved = 0;
	}
}

/*
	sample table box, container for the time/space map

	aligned(8) class SampleTableBox extends Box(‘stbl’) { }
*/
class SampleTableBox extends Box {
	constructor(buffer) {
		super('stbl', '', buffer);
		this.setInnerBoxes(buffer);
		// console.log(this);
	}

	stsd(buffer) {
		return 'TODO stsd';
	}	

	stco(buffer) {
		return new ChunkOffsetBox(buffer);
	}

	stsc(buffer) {
		return 'TODO stsc';
	}

	stsz(buffer) {
		return 'TODO stsz';
	}

	stts(buffer) {
		return 'TODO stts';
	}

	stss(buffer) {
		return 'TODO stss';
	}

	ctts(buffer) {
		return 'TODO ctts';	
	}
}

/*
	aligned(8) class ChunkOffsetBox extends FullBox(‘stco’, version = 0, 0) { 
		unsigned int(32) entry_count;
		for (i=1; i u entry_count; i++) {
		    unsigned int(32)  chunk_offset;
		}
	}
	
	// 例子
	ChunkOffsetBox {
		type: 'stco',
		size: 56,
		headerSize: 12,
		boxes: [],
		version: 0,
		flags: 0,
		entry_count: 10,
		chunk_offsets: [ 4286, 192256, 282028, 389838, 488519, 592669, 689195, 841434, 939661, 1047160 ]
	}	
*/
class ChunkOffsetBox extends FullBox {
	constructor(buffer) {
		super('stco', buffer);

		this.version = 0;
		this.flags = 0;

		const offset = this.headerSize;

		this.entry_count = buffer.readUInt32BE(offset); // 4个字节，entry条目

		this.chunk_offsets = [];

		for(let i = 1; i <= this.entry_count; i++) {
			const chunk_offset = buffer.readUInt32BE(offset + i * 4);
			this.chunk_offsets.push(chunk_offset);
		}

		// console.log(this);
	}
}
