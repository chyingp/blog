const crypto = require('crypto');
const fs = require('fs');
const pubKey = fs.readFileSync('./public-key.pem', 'utf8');
const privKey = fs.readFileSync('./private-key.pem', 'utf8');

const plainText = 'hello';

const encryptedBuff = crypto.publicEncrypt(pubKey, Buffer.from(plainText));
const decryptedBuff = crypto.privateDecrypt(privKey, encryptedBuff);

console.log( decryptedBuff.toString() ); // hello