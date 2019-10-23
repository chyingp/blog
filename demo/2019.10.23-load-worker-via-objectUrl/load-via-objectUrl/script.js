const fs = require('fs');
const workerFilePath = './worker.js';
const mainFilePath = './main.js';
const bundleFilePath = './bundle.js';

const workerFileContent = fs.readFileSync(workerFilePath, 'utf8').toString();
const mainFileContent = fs.readFileSync(mainFilePath, 'utf8').toString();
const bundleFileContent = mainFileContent.replace('./worker.js', workerFileContent);

fs.writeFileSync(bundleFilePath, bundleFileContent);
