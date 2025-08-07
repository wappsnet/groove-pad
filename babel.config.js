module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            store: './src/store',
            screens: './src/screens',
            services: './src/services',
            modules: './src/modules',
            components: './src/components',
            containers: './src/containers',
            definitions: './src/definitions',
            helpers: './src/helpers',
            assets: './src/assets',
            hooks: './src/hooks',
            types: './src/types'
          }
        }
      ]
    ]
  };
};
