import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "../src";

export default function() {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [readonly, setReadonly] = useState(false);

    return (
        <div>
            <h1>与原生Checkbox对比</h1>
            <p>Tips: 快捷键A, 打开插件面板查看点击事件</p>
            <p>
                <label htmlFor="c1">
                    <Checkbox id="c1" checked={checked} onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 受控复选框
                </label>
            </p>
            <p>
                <label htmlFor="c2">
                    <input id="c2" checked={checked} type="checkbox" onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 原生受控复选框
                </label>
            </p>
            <p>
                <label htmlFor="c3">
                    <Checkbox id="c3" name="ab" autoFocus={true} defaultChecked={true} onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 默认值复选框
                </label>
            </p>
            <p>
                <label htmlFor="c4">
                    <input id="c4" defaultChecked={true} type="checkbox" onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 原生默认值复选框
                </label>
            </p>
            <button onClick={() => setChecked((preChcked) => !preChcked)}>切换受控组件选中状态</button>&nbsp;
            <button onClick={() => setDisabled((preDisabled) => !preDisabled)}>切换禁用状态</button>&nbsp;
            <button onClick={() => setReadonly((preReadonly) => !preReadonly)}>切换只读状态</button>&nbsp;
            <h1>不确定状态</h1>
            <Checkbox defaultChecked={true} indeterminate={true} />
        </div>
    );
}
