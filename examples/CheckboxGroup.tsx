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
            <CheckboxGroup>
                <label htmlFor="c1">
                    <Checkbox id="c1" value="c1" />
                    &nbsp; 满血复活{" "}
                </label>

                <label htmlFor="c2">
                    <Checkbox id="c2" value="c2" />
                    &nbsp; 等级满级{" "}
                </label>

                <label htmlFor="c3">
                    <Checkbox id="c3" value="c3" />
                    &nbsp; 无敌{" "}
                </label>
            </CheckboxGroup>

            <h2>不确定状态</h2>
            <div>
                <label htmlFor="b1">
                    <Checkbox id="b1" checked={checkedAll} indeterminate={indeterminate} onChange={handlToggleCheck} />
                    全选
                </label>

                <br />
                <CheckboxGroup value={value} onChange={handleChange}>
                    <label htmlFor="bb1">
                        <Checkbox id="bb1" value="北京" />
                        北京
                    </label>
                    <label htmlFor="bb2">
                        <Checkbox id="bb2" value="上海" />
                        北京
                    </label>
                    <label htmlFor="bb3">
                        <Checkbox id="bb3" value="广州" />
                        北京
                    </label>
                </CheckboxGroup>
            </div>
        </div>
    );
}
