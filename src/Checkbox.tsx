import classNames from "classnames";
import React, { useContext } from "react";
import { useControll, useMount, useUnmount } from "utils-hooks";
import { CheckboxProps } from "./interface";
import { GroupContext } from "./Context";

export function Checkbox(props: CheckboxProps) {
    const { className, style, defaultChecked, indeterminate, type = "checkbox", ...rest } = props;
    let [checked, setChecked, isControll] = useControll(props, "checked", "defaultChecked", false);
    const context = useContext(GroupContext);
    let prefixCls;
    if (!props.prefixCls) {
        prefixCls = `xy-${type}`;
    }
    if (context && context.value) {
        if (type === "checkbox") {
            checked = context.value.some((x) => x === props.value);
        } else {
            checked = context.value === props.value;
        }
    }
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: (context && context.disabled) || props.disabled,
        [`${prefixCls}-readonly`]: props.readOnly,
        [`${prefixCls}-indeterminate`]: indeterminate
    });

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (props.disabled || props.readOnly || (type === "radio" && checked)) {
            return;
        }

        if (context && context.onChange) {
            context.onChange(e.target.checked, props.value);
            return;
        }

        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(e.target.checked);
        }
        if (props.onChange) {
            props.onChange(e.target.checked, props.value);
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === 32) {
            handleCheckChange(e as any);
        }
    }

    useMount(() => {
        if (context && context.onAdd) {
            context.onAdd(props.value);
        }
    });

    useUnmount(() => {
        if (context && context.onRemove) {
            context.onRemove(props.value);
        }
    });

    return (
        <span className={classString} style={style}>
            <input
                {...rest}
                {...(isControll || (context && context.onChange) ? { checked } : { defaultChecked: checked })}
                type={type}
                aria-disabled={props.disabled}
                className={`${prefixCls}-input`}
                onChange={handleCheckChange}
                onKeyPress={handleKeyPress}
            />
            <span className={`${prefixCls}-inner`} />
        </span>
    );
}

export default React.memo(Checkbox);
