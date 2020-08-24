const fs = require('fs');

const filepath = './flower.mp4';
const BYTES_READ_PER_TIME = 1024 * 1024; // 每次读取的字节数
const OPEN_FLAGS = 'r';

const fd = fs.openSync(filepath, OPEN_FLAGS);
const buff = Buffer.alloc(BYTES_READ_PER_TIME);

fs.read(fd, buff, 0, BYTES_READ_PER_TIME, 0, function (err, bytesRead, buffer) {
	// console.log(`bytesRead is ${bytesRead}`);
	// console.log(buffer.toString());
	getBoxes(buffer);
});

function getBoxes(buffer) {
	let offset = 0;
	let totalByteLen = buffer.byteLength;

	do {
		let size = buffer.readUInt32BE(offset); // 4个字节
		let type = buffer.slice(offset + 4, offset + 8).toString(); // 4个字节

		console.log(`size: ${size}, type: ${type}`);

		if (size === 0) {
			size = buffer.readUIntBE(offset + 8, 8); // 8个字节，largeSize
		} else if (size === 1) {
			// last box
		}

		let boxBuffer = buffer.slice(offset, offset + size);

		switch (type) {
			case 'ftyp':
				const ftyp = new FileTypeBox(boxBuffer);				
				break;
			case 'moov':
				const moov = new MovieBox(boxBuffer);
				break;
			// case 'mvhd':
			// 	const moov = new MovieBox(boxBuffer);
			// 	break;
		}

		offset += size;
	} while(offset < totalByteLen);
}

function getBox(buffer) {

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

		// this.largeSize = 0; // 可选，8个字节
		// this.extendedType = extendedType || boxType; // 可选，16个字节
		this._initialize(buffer);
	}

	_initialize(buffer) {				
		this.size = buffer.readUInt32BE(0); // 4个字节
		this.type = buffer.slice(4, 8).toString(); // 4个字节

		let offset = 8;

		if (this.size === 0) {
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
	}
}

/*
	aligned(8) class MovieBox extends Box(‘moov’){ }
*/
class MovieBox extends Box {
	constructor(buffer) {
		super('moov', '', buffer);

		const headerSize = this.headerSize;
		this.mvhd = new MovieHeaderBox(buffer.slice(headerSize));

		console.log(this.mvhd);
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
