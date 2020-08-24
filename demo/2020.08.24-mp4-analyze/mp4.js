const fs = require('fs');

const filepath = './flower.mp4';
const BYTES_READ_PER_TIME = 1024; // 每次读取的字节数
const OPEN_FLAGS = 'r';

const fd = fs.openSync(filepath, OPEN_FLAGS);
const buff = Buffer.alloc(BYTES_READ_PER_TIME);

fs.read(fd, buff, 0, BYTES_READ_PER_TIME, 0, function (err, bytesRead, buffer) {
	// console.log(`bytesRead is ${bytesRead}`);
	// console.log(buffer.toString());
	getBoxes(buffer);
});

function getBoxes(buffer) {
	let size = buffer.readUInt32BE(0); // 4个字节
	let type = buffer.slice(4, 8).toString(); // 4个字节

	if (type === 'ftyp') {
		const ftyp = new FileTypeBox(buffer);
		console.log(ftyp);
	}

	// const uuidType = 'uuid';
	// let version = 0;
	// let flags = [];

	// if (size === 0) {
	// 	size = buffer.readUIntBE(8, 8); // 8个字节，largeSize
	// } else if (size === 1) {
	// 	// last box
	// }

	// console.log(`size: ${size}`);
	// console.log(`type: ${type.toString()}`);
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
	constructor(boxType, version, flags, buffer) {
		super(boxType);
		this.version = version; // 必选，1个字节
		this.flags = flags; // 必选，3个字节
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
		console.log('hello');
	}
}