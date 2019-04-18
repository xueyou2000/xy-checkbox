import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox, CheckboxGroup } from "../src";

export default function() {
    const [checkedAll, setCheckedAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [value, setValue] = useState([]);

    function handleChange(options: string[], checkAll: boolean) {
        if (options.length === 0 || checkAll) {
            setIndeterminate(false);
            setCheckedAll(checkAll);
        } else {
            setIndeterminate(true);
            setCheckedAll(true);
        }

        setValue(options);
    }

    function handlToggleCheck(_checkedAll: boolean) {
        if (_checkedAll) {
            setValue(["北京", "上海", "广州"]);
        } else {
            setValue([]);
        }
        setCheckedAll(_checkedAll);
        setIndeterminate(false);
    }

    return (
        <div>
            <h1>CheckboxGroup</h1>
            <CheckboxGroup disabled={true}>
                <Checkbox value="c1">满血复活</Checkbox>
                <Checkbox value="c2">等级满级</Checkbox>
                <Checkbox value="c3">无敌</Checkbox>
            </CheckboxGroup>

            <h2>不确定状态</h2>
            <div>
                <Checkbox checked={checkedAll} indeterminate={indeterminate} onChange={handlToggleCheck}>
                    全选
                </Checkbox>

                <br />
                <CheckboxGroup value={value} onChange={handleChange}>
                    <Checkbox value="北京">北京</Checkbox>
                    <Checkbox value="上海">上海</Checkbox>
                    <Checkbox value="广州">广州</Checkbox>
                </CheckboxGroup>
            </div>
        </div>
    );
}
