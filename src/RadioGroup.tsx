import classNames from "classnames";
import React, { useRef } from "react";
import { RadioGroupProps } from "./interface";
import { useControll } from "utils-hooks";
import { GroupContext } from "./Context";

export function RadioGroup(props: RadioGroupProps) {
    const { prefixCls = "xy-radio-xgroup", className, style, disabled, children } = props;
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled
    });

    function onChange(checked: boolean, val: any) {
        if (checked) {
            changeValue(val);
        } else {
            changeValue(null);
        }
    }

    function changeValue(val: any) {
        if (disabled) {
            return;
        }
        if (!isControll) {
            setValue(val);
        }
        if (props.onChange) {
            props.onChange(val);
        }
    }

    return (
        <GroupContext.Provider value={{ value, disabled, onChange }}>
            <div className={classString} style={style}>
                {children}
            </div>
        </GroupContext.Provider>
    );
}

export default React.memo(RadioGroup);
