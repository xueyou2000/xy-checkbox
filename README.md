| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-checkbox.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-checkbox
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-checkbox

[![xy-checkbox](https://nodei.co/npm/xy-checkbox.png)](https://npmjs.org/package/xy-checkbox)

# xy-checkbox

复选框, 复选框组 单选框， 单选框组

## 安装

```bash
# yarn
yarn add xy-checkbox utils-hooks classNames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Checkbox, Radio, CheckboxGroup, RadioGroup } from "xy-checkbox";
// 可选的引入样式
import "xy-checkbox/assets/index.css";
ReactDOM.render(<Checkbox>复选框</Checkbox>, container);
```

## API

### Checkbox/Radio

| 属性           | 说明                                                         | 类型                                                        | 默认值 |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | ------ |
| name           | 同原生 input checkbox 一样的 name                            | string                                                      | 无     |
| checked        | 复选框是否选中                                               | boolean                                                     | false  |
| defaultChecked | 默认是否选中                                                 | boolean                                                     | false  |
| indeterminate  | 不确定状态                                                   | boolean                                                     | false  |
| disabled       | 是否禁用                                                     | boolean                                                     | false  |
| children       | 内容                                                         | React.ReactNode                                             | 无     |
| autoFocus      | 是否自动聚集焦点                                             | boolean                                                     | false  |
| value          | 同原生 input checkbox 一样的 value, 作为复选框组内使用时必须 | string                                                      | 无     |
| onChange       | Checkbox 值更改事件                                          | (chcked: boolean, value: any) => void                       | 无     |
| onFocus        | Checkbox 聚集焦点事件                                        | (e: React.FocusEvent<HTMLInputElement>) => void             | 无     |
| onBlur         | Checkbox 失去焦点事件                                        | (e: React.FocusEvent<HTMLInputElement>) => void             | 无     |
| onClick        | Checkbox 点击事件                                            | (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void | 无     |

### CheckboxGroup

| 属性         | 说明                 | 类型                                       | 默认值 |
| ------------ | -------------------- | ------------------------------------------ | ------ |
| value        | 选中复选框值集合     | any[]                                      | 无     |
| defaultValue | 默认选中复选框值集合 | any[]                                      | 无     |
| onChange     | change 事件          | (val: any[], checkedAll: boolean) => void  | 无     |
| onBlur       | 复选框组失去焦点事件 | (e: React.FocusEvent<HTMLElement>) => void | 无     |
| disabled     | 是否禁用整个组       | boolean                                    | false  |

### RadioGroup

| 属性         | 说明                 | 类型                                       | 默认值 |
| ------------ | -------------------- | ------------------------------------------ | ------ |
| value        | 选中复选框值集合     | any                                        | 无     |
| defaultValue | 默认选中复选框值集合 | any                                        | 无     |
| disabled     | 是否禁用整个组       | boolean                                    | false  |
| onChange     | change 事件          | (val: any) => void                         | 无     |
| onBlur       | 复选框组失去焦点事件 | (e: React.FocusEvent<HTMLElement>) => void | 无     |

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
