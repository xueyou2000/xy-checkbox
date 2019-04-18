import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Radio, RadioGroup } from "../src";

export default function() {
    return (
        <div>
            <h1>RadioGroup</h1>

            <RadioGroup>
                <Radio value="c1">男</Radio>
                <Radio value="c2">女</Radio>
                <Radio value="c3">未知</Radio>
            </RadioGroup>
        </div>
    );
}
