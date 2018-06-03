module.exports = function({ types: babelTypes }) {
  return {
    name: "node-env-replacer",
    visitor: {
      MemberExpression(path, state) {
        if (path.get("object").matchesPattern("process.env")) {
          const key = path.toComputedKey();
          if ( babelTypes.isStringLiteral(key) ) {
            path.replaceWith(babelTypes.valueToNode(process.env[key.value]));
          }
        }
      }
    }
  };
};