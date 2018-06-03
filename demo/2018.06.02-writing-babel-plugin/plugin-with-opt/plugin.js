// plugin.js
module.exports = function({ types: babelTypes }) {
  return {
    name: "deadly-simple-plugin-example",
    visitor: {
      Identifier(path, state) {
        let name = path.node.name;
        if (state.opts[name]) {
          path.node.name = state.opts[name];
        }
      }
    }
  };
};