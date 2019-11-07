const fs = require('fs');

const result = require('babel-core').transformFileSync('./index.js', {
    babelrc: false,
    presets: ['react-native'],
    plugins: [
        ['transform-styles', {extensions: ['css']}]
    ]
});
console.log(result.code);