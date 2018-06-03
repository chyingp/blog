// plugin.js
module.exports = function({ types: babelTypes }) {
  return {
    name: "deadly-simple-plugin-example",
    visitor: {
      Identifier(path, state) {
        if (path.node.name === 'bad') {
          path.node.name = 'good';
        }
      }
    }
  };
};