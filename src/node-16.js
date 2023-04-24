module.exports = {
  extends: './common.js',
  presets: [['@babel/preset-env', { targets: { node: '16' } }]],
  plugins: ['add-module-exports']
};
