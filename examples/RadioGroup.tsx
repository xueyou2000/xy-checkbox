import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Radio, RadioGroup } from "../src";

export default function() {
    return (
        <div>
            <h1>RadioGroup</h1>

            <RadioGroup>
                <label htmlFor="c1">
                    <Radio id="c1" value="c1" />男
                </label>
                <label htmlFor="c2">
                    <Radio id="c2" value="c2" />女
                </label>
                <label htmlFor="c3">
                    <Radio id="c3" value="c3" />
                    未知
                </label>
            </RadioGroup>
        </div>
    );
}
