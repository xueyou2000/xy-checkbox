import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "../src";
import "../src/assets/index";

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
    );
}
