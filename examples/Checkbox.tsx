import React, { useState } from "react";
import { Checkbox } from "../src";
import "../src/assets/index";

export default function() {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <p>
                <Checkbox autoFocus={true} defaultChecked={true} disabled={disabled}>
                    复选框
                </Checkbox>
            </p>
            <p>
                <Checkbox checked={checked} disabled={disabled}>
                    受控复选框
                </Checkbox>
            </p>
            <button onClick={() => setChecked((preChcked) => !preChcked)}>切换受控组件选中状态</button>&nbsp;
            <button onClick={() => setDisabled((preDisabled) => !preDisabled)}>切换禁用状态</button>&nbsp;
            <h2>不确定状态</h2>
            <Checkbox defaultChecked={true} indeterminate={true} />
        </div>
    );
}
