// Render the browser's React component into the production HTML after CRA builds.
const fs = require('fs');
const path = require('path');
const Module = require('module');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { transformSync } = require('@babel/core');

const root = path.resolve(__dirname, '..');
const appPath = path.join(root, 'src/App.js');
const htmlPath = path.join(root, 'build/index.html');
const compiled = transformSync(fs.readFileSync(appPath, 'utf8'), {
  filename: appPath,
  babelrc: false,
  configFile: false,
  presets: [[require.resolve('@babel/preset-react'), { runtime: 'classic' }]],
  plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
}).code;

// CRA emitted the CSS bundle already; Node does not need a stylesheet loader.
const previousCssLoader = require.extensions['.css'];
require.extensions['.css'] = () => {};
let markup;
try {
  const appModule = new Module(appPath, module);
  appModule.filename = appPath;
  appModule.paths = Module._nodeModulePaths(path.dirname(appPath));
  appModule._compile(compiled, appPath);
  markup = renderToString(React.createElement(appModule.exports.default));
} finally {
  if (previousCssLoader) require.extensions['.css'] = previousCssLoader;
  else delete require.extensions['.css'];
}
const html = fs.readFileSync(htmlPath, 'utf8');
const emptyRoot = '<div id="root"></div>';
if (!html.includes(emptyRoot)) {
  throw new Error('Expected an empty CRA root. Run npm run build before pre-rendering.');
}
if (!markup.includes('id="hero-title"') || !markup.includes('TrainSense')) {
  throw new Error('Pre-rendered portfolio content is incomplete.');
}
fs.writeFileSync(htmlPath, html.replace(emptyRoot, () => '<div id="root">' + markup + '</div>'));
console.log('Pre-rendered portfolio into build/index.html');
