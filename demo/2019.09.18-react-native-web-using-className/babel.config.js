module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "react-native-classname-to-style",
      [
        "react-native-platform-specific-extensions",
        {
          extensions: ["less", "css"]
        }
      ]
    ]
  };
  