import React from "react";
import { render, fireEvent } from "react-testing-library";
import { Checkbox, CheckboxGroup } from "../src";

describe("CheckboxGroup", () => {
    test("default checked", () => {
        const wrapper = render(
            <CheckboxGroup defaultValue={["a", "c"]}>
                <Checkbox value="a">苹果</Checkbox>
                <Checkbox value="b">梨子</Checkbox>
                <Checkbox value="c">西瓜</Checkbox>
            </CheckboxGroup>
        );

        const checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(2);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["a", "c"]);
    });

    test("empty checked", () => {
        const wrapper = render(
            <CheckboxGroup>
                <Checkbox value="a">苹果</Checkbox>
                <Checkbox value="b">梨子</Checkbox>
                <Checkbox value="c">西瓜</Checkbox>
            </CheckboxGroup>
        );

        const checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(0);
    });

    test("click check", () => {
        const wrapper = render(
            <CheckboxGroup>
                <Checkbox value="a">苹果</Checkbox>
                <Checkbox value="b">梨子</Checkbox>
                <Checkbox value="c">西瓜</Checkbox>
            </CheckboxGroup>
        );

        fireEvent.click(wrapper.getByText("苹果").parentElement);
        let checkeds = wrapper.container.querySelectorAll(`input:checked`);

        expect(checkeds.length).toBe(1);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["a"]);

        fireEvent.click(wrapper.getByText("西瓜").parentElement);
        checkeds = wrapper.container.querySelectorAll(`input:checked`);
        expect(checkeds.length).toBe(2);
        expect([].map.call(checkeds, (x) => x.value)).toEqual(["a", "c"]);
    });
});
