import React, { useState } from "react";
import { Radio } from "../src";
import "../src/assets/index";

export default function() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <p>
                <Radio autoFocus={true} defaultChecked={false} disabled={disabled}>
                    默认值复选框
                </Radio>
            </p>
            <p>
                <Radio checked={checked} onChange={setChecked} disabled={disabled}>
                    受控复选框
                </Radio>
            </p>
            <button onClick={() => setChecked((preChcked) => !preChcked)}>切换受控组件选中状态</button>&nbsp;
            <button onClick={() => setDisabled((preDisabled) => !preDisabled)}>切换禁用状态</button>&nbsp;
        </div>
    );
}
