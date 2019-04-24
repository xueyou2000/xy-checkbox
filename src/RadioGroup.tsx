import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import { GroupContext } from "./Context";
import { RadioGroupProps } from "./interface";

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "xy-radio-group", className, style, disabled, children, tabIndex, onBlur } = props;
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
            <div className={classString} style={style} tabIndex={tabIndex} onBlur={onBlur} ref={ref}>
                {children}
            </div>
        </GroupContext.Provider>
    );
});

export default React.memo(RadioGroup);
