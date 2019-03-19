import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import { CheckboxProps } from "./interface";

export function Checkbox(props: CheckboxProps) {
    const { prefixCls = "xy-checkbox", className, style, defaultChecked, ...rest } = props;
    const [checked, setChecked, isControll] = useControll(props, "checked", "defaultChecked");
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-readonly`]: props.readOnly
    });
    const inputProps = {
        ...rest,
        type: "checkbox",
        "aria-disabled": props.disabled || props.readOnly,
        className: `${prefixCls}-input`,
        onChange: handleCheckChange,
        onKeyPress: handleKeyPress
    };
    if (isControll) {
        inputProps["checked"] = checked;
    } else {
        inputProps["defaultChecked"] = defaultChecked;
    }

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (props.disabled || props.readOnly) {
            return;
        }
        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(e.target.checked);
        }
        if (props.onChange) {
            props.onChange(e.target.checked);
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === 32) {
            handleCheckChange(e as any);
        }
    }

    return (
        <span className={classString} style={style}>
            <input {...inputProps} />
            <span className={`${prefixCls}-inner`} />
        </span>
    );
}

export default React.memo(Checkbox);
