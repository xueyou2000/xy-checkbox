import React, { useContext } from "react";
import { useMount, useUnmount } from "utils-hooks";
import CheckboxMini from "./CheckboxMini";
import { GroupContext } from "./Context";
import { CheckboxProps } from "./interface";

export default React.forwardRef((props: CheckboxProps, ref: React.MutableRefObject<any>) => {
    const { equal } = props;
    const context = useContext(GroupContext);
    const _props: CheckboxProps = Object.assign({}, props);

    if (context && context.onChange) {
        _props.checked = equal ? equal(context.value, props.value) : context.value === props.value;
        _props.onChange = context.onChange;
    }
    if (context && context.disabled !== undefined) {
        _props.disabled = context.disabled;
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
        <label className="checkbox-wrap" htmlFor={_props.id} ref={ref}>
            <CheckboxMini {..._props} type="radio" />
            <span className="radio-label">{props.children}</span>
        </label>
    );
});
