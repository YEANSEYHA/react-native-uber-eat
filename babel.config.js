module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@images": "./src/images",
            "@fonts": "./src/fonts",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
