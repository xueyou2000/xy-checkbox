import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Radio, RadioGroup } from "../src";

describe("RadioGroup", () => {
    test("default checked", () => {
        const wrapper = render(
            <RadioGroup defaultValue="b">
                <Radio value="a">苹果</Radio>
                <Radio value="b">梨子</Radio>
                <Radio value="c">西瓜</Radio>
            </RadioGroup>
        );

        const checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(1);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["b"]);
    });

    test("empty checked", () => {
        const wrapper = render(
            <RadioGroup>
                <Radio value="a">苹果</Radio>
                <Radio value="b">梨子</Radio>
                <Radio value="c">西瓜</Radio>
            </RadioGroup>
        );

        const checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(0);
    });

    test("click check", () => {
        const wrapper = render(
            <RadioGroup>
                <Radio value="a">苹果</Radio>
                <Radio value="b">梨子</Radio>
                <Radio value="c">西瓜</Radio>
            </RadioGroup>
        );

        fireEvent.click(wrapper.getByText("苹果").parentElement);
        let checkeds = wrapper.container.querySelectorAll(`input:checked`);

        expect(checkeds.length).toBe(1);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["a"]);

        fireEvent.click(wrapper.getByText("西瓜").parentElement);
        checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(1);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["c"]);
    });
});
