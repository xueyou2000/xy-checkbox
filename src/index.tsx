import React from "react";
import classNames from "classnames";
import { CheckboxProps } from "./interface";
import useControll from "utils-hooks/es/useControll";

export function Checkbox(props: CheckboxProps) {
    const { prefixCls = "xy-checkbox", className, style, defaultChecked, type = "checkbox", ...rest } = props;
    const [checked, setChecked, isControll] = useControll(props, "checked", "defaultChecked");
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-readonly`]: props.readOnly
    });

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (props.disabled || props.readOnly) {
            return;
        }
        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(e.target.checked);
        }
        if (props.onChange) {
            props.onChange(e);
        }
    }

    return (
        <span className={classString} style={style}>
            {/* 注意 ...rest 必须在前面, 后面的 checked, onChange 将覆盖rest里的值 */}
            <input {...rest} type={type} checked={checked} className={`${prefixCls}-input`} onChange={handleCheckChange} />
            <span className={`${prefixCls}-inner`} />
        </span>
    );
}

export default Checkbox;
