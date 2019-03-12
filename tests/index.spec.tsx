import React from "react";
import { render, fireEvent } from "react-testing-library";
import Checkbox from "../src";

describe("rc-checkbox", () => {
    test("render", () => {
        // Arrange
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;

        // Assert: 默认checked状态为false
        expect(input.checked).toBeFalsy();

        // Act: 模拟input点击选中事件
        fireEvent.change(input, { target: { checked: true } });
        // Assert: 断言此时checked状态为true
        expect(input.checked).toBeTruthy();

        // Act: 模拟input点击取消选中事件
        fireEvent.change(input, { target: { checked: false } });
        // Assert: 断言此时checked状态为false
        expect(input.checked).toBeFalsy();
    });

    test("click radio", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" type="radio" />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        expect(input.type).toBe("radio");
        expect(input.checked).toBeFalsy();

        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();

        // Act: 模拟input:radio点击选中后再次点击依然是选中状态
        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();
    });

    test("passes data-* props to input", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" data-type="my-data-type" />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        expect(input.getAttribute("data-type")).toBe("my-data-type");
    });

    test("passes aria-* props to input", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" aria-label="my-aria-label" />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        expect(input.getAttribute("aria-label")).toBe("my-aria-label");
    });

    test("passes value props to input", () => {
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" value={6} />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        expect(input.value).toBe("6");
    });

    test("autoFocus", () => {
        const handleFocus = jest.fn();
        render(<Checkbox autoFocus={true} onFocus={handleFocus} />);
        expect(handleFocus).toBeCalled();
    });

    test("disabled", () => {
        const handleChange = jest.fn();
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" disabled={true} onChange={handleChange} />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        const span = wrapper.container.querySelector(".xy-checkbox");
        expect(span.classList.contains("xy-checkbox-disabled")).toBeTruthy();
        expect(input.hasAttribute("disabled")).toBeTruthy();
        expect(input.checked).toBeFalsy();

        // 禁用状态下无法切换选中状态
        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();
        // 禁用状态下不会触发onChange回调
        expect(handleChange.mock.calls.length).toBe(0);
    });

    test("readOnly", () => {
        const handleChange = jest.fn();
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" readOnly={true} onChange={handleChange} />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;
        const span = wrapper.container.querySelector(".xy-checkbox");
        expect(span.classList.contains("xy-checkbox-readonly")).toBeTruthy();
        expect(input.hasAttribute("readonly")).toBeTruthy();
        expect(input.checked).toBeFalsy();

        // 只读状态下无法切换选中状态
        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();
        // 只读状态下不会触发onChange回调
        expect(handleChange.mock.calls.length).toBe(0);
    });

    test("controll input", () => {
        const handleChange = jest.fn();
        const wrapper = render(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" checked={true} onChange={handleChange} />
                    useTheme
                </label>
            </div>
        );
        const input = wrapper.getByLabelText("useTheme", { selector: "input" }) as HTMLInputElement;

        expect(input.checked).toBeTruthy();

        // 无法通过点击事件改变受控组件
        fireEvent.change(input, { target: { checked: true } });
        expect(input.checked).toBeTruthy();

        // 可以通过外部props改变受控组件值
        wrapper.rerender(
            <div>
                <label htmlFor="theme">
                    <Checkbox id="theme" checked={false} onChange={handleChange} />
                    useTheme
                </label>
            </div>
        );
        expect(input.checked).toBeFalsy();
        // 并不会触发onChange回调
        expect(handleChange.mock.calls.length).toBe(0);
    });
});
