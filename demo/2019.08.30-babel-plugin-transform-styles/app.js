require('babel-core').transform('code', {
    plugins: [['transform-styles', {
                extensions: ['css'],
              }]]
});