module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 12 } }]],
  plugins: ['add-module-exports'],
  sourceMaps: 'inline',
  minified: true
};
