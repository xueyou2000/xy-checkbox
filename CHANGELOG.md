# Change Log

## 1.4.0 (Tue Nov 19 2019)

-   修复`react`与`react-dom`版本不一致导致的问题
-   测试库迁移到`@testing-library/react"`

## 1.3.0 (Fri Sep 20 2019)

-   增加`equal`属性，比对对象值

## 1.2.32 (Tue Sep 03 2019)

-   清除控制台打印, 优化代码警告

## 1.2.31 (Wed May 22 2019)

-   再次优化`radio`样式!!

## 1.2.3 (Wed May 22 2019)

-   优化`radio`样式

## 1.2.2 (Sat May 11 2019)

-   更新依赖

## 1.2.1 (Sun May 05 2019)

-   更新`xy-manual-tools`, 修复编译 demo

## 1.2.0 (Mon Apr 29 2019)

-   从`storybook`换成`xy-manual-tools`来管理 demo

## 1.1.6 (Fri Apr 26 2019)

-   更新依赖

## 1.1.51 (Thu Apr 25 2019)

-   修改`Radio`, `Checkbox`在 hover 状态下样式更加显眼

## 1.1.5 (Wed Apr 24 2019)

-   修复`CheckboxGroup`, `RadioGroup`样式名拼错

## 1.1.4 (Wed Apr 24 2019)

-   调整主题色
-   转发`ref`

## 1.1.3 (Wed Apr 24 2019)

-   修复`CheckboxGroup`当`value`属性为`null`时的问题

## 1.1.2 (Mon Apr 22 2019)

-   `CheckboxGroup`, `RadioGroup` 增加`onBlur`事件

## 1.1.1 (Thu Apr 18 2019)

-   分离最小化`CheckboxMini`和`Checkbox`
-   `CheckboxMini`处理最简单的逻辑
-   `Checkbox`封装与`CheckboxGroup`的交互, 封装 label 标签

## 1.1.0 (Wed Apr 17 2019)

-   改变导出
-   增加`CheckboxGroup`
-   增加`Radio`组件
-   增加`RadioGroup`

## 1.0.6 (Fri Mar 22 2019)

-   增加`radio`类型

## 1.0.5 (Mon Mar 18 2019)

-   更新`utils-hooks`依赖

## 1.0.4 (Mon Mar 18 2019)

-   更改输出目标`esnext`为`es5`
-   默认使用`es`模块

## 1.0.3 (Sun Mar 17 2019)

-   更新依赖`utils-hooks`的版本, 提升性能
-   更改`onChange`签名, 现在直接返回布尔值, 而不是事件对象

## 1.0.2 (Thu Mar 14 2019)

-   增加`tab`导航后空格触发 change 事件
-   移除`type`props, 不再将`radio`耦合进来

## 0.0.1 (Tue Mar 12 2019)

-   初始化项目
