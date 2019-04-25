import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Radio } from "../src";

export default function() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readonly, setReadonly] = useState(false);

    return (
        <div style={{ fontSize: "14px" }}>
            <h1>与原生Radio对比</h1>
            <p>Tips: 快捷键A, 打开插件面板查看点击事件</p>
            <p>
                <Radio checked={checked} onChange={setChecked} disabled={disabled} readOnly={readonly}>
                    受控复选框
                </Radio>
            </p>
            <p>
                <label htmlFor="c2">
                    <input id="c2" checked={checked} type="radio" onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 原生受控复选框
                </label>
            </p>
            <p>
                <Radio autoFocus={true} defaultChecked={false} onChange={action("clicked")} disabled={disabled} readOnly={readonly}>
                    默认值复选框
                </Radio>
            </p>
            <p>
                <label htmlFor="c4">
                    <input id="c4" defaultChecked={false} type="radio" onChange={action("clicked")} disabled={disabled} readOnly={readonly} />
                    &nbsp; 原生默认值复选框
                </label>
            </p>
            <button onClick={() => setChecked((preChcked) => !preChcked)}>切换受控组件选中状态</button>&nbsp;
            <button onClick={() => setDisabled((preDisabled) => !preDisabled)}>切换禁用状态</button>&nbsp;
            <button onClick={() => setReadonly((preReadonly) => !preReadonly)}>切换只读状态</button>&nbsp;
        </div>
    );
}
