# xy-checkbox

---

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-checkbox.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-checkbox
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-checkbox

> 基于`React Hooks` + `typescript`的基础组件, 只提供`es`模块

## 安装

[![xy-checkbox](https://nodei.co/npm/xy-checkbox.png)](https://npmjs.org/package/xy-checkbox)

|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|
| --- | --- | --- | --- | --- |
| IE 11+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

```sh
# npm
npm install --save xy-checkbox classNames utils-hooks

# yarn
yarn add xy-checkbox classNames utils-hooks
```

## 使用

```ts
import React from "react";
import ReactDOM from "react-dom";
import Checkbox from "xy-checkbox";
// 可选的引入样式
import "xy-checkbox/assets/index.css";
ReactDOM.render(<Checkbox />, container);
```

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-checkbox is released under the MIT license.
