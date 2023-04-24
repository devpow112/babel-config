module.exports = {
  extends: './common.js',
  presets: [['@babel/preset-env', { targets: { node: '18' } }]],
  plugins: ['add-module-exports']
};
