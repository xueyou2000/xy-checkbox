import React from "react";
import { Radio, RadioGroup } from "../src";
import "../src/assets/index";

export default function() {
    return (
        <RadioGroup>
            <Radio value="c1">男</Radio>
            <Radio value="c2">女</Radio>
            <Radio value="c3">未知</Radio>
        </RadioGroup>
    );
}
