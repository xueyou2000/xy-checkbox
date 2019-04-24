import classNames from "classnames";
import React, { useRef } from "react";
import { CheckboxGroupProps } from "./interface";
import { useControll } from "utils-hooks";
import { GroupContext } from "./Context";

export const CheckboxGroup = React.forwardRef((props: CheckboxGroupProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "xy-checkbo-xgroup", className, style, disabled, children, tabIndex, onBlur } = props;
    const [_value, setValue, isControll] = useControll<any[]>(props, "value", "defaultValue", []);
    const value = _value === null ? [] : _value;
    const checkboxsRef = useRef<any[]>([]);
    const checkedAll = calcCheckedAll();
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-checkall`]: checkedAll
    });

    function calcCheckedAll(val?: any[]) {
        val = val || value;
        return checkboxsRef.current.length > 0 && checkboxsRef.current.length === val.length;
    }

    function onAdd(value: any) {
        if (!checkboxsRef.current.some((x) => x === value)) {
            checkboxsRef.current.push(value);
        }
    }

    function onRemove(value: any) {
        checkboxsRef.current = checkboxsRef.current.filter((x) => x !== value);
    }

    function onChange(checked: boolean, val: any) {
        const index = value.findIndex((x) => x === val);
        if (index === -1) {
            // 选中
            changeValue([...value, val]);
        } else {
            // 取消选中
            changeValue(value.filter((x) => x !== val));
        }
    }

    function changeValue(val: any[]) {
        if (disabled) {
            return;
        }

        if (!isControll) {
            setValue(val);
        }
        if (props.onChange) {
            props.onChange(val, calcCheckedAll(val));
        }
    }

    return (
        <GroupContext.Provider value={{ value, disabled, onAdd, onRemove, onChange }}>
            <div className={classString} style={style} tabIndex={tabIndex} onBlur={onBlur} ref={ref}>
                {children}
            </div>
        </GroupContext.Provider>
    );
});

export default React.memo(CheckboxGroup);
