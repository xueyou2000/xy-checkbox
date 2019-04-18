import React, { useContext, useRef } from "react";
import { useMount, useUnmount } from "utils-hooks";
import CheckboxMini from "./CheckboxMini";
import { GroupContext } from "./Context";
import { CheckboxProps } from "./interface";

export default function Checkbox(props: CheckboxProps) {
    const context = useContext(GroupContext);
    const _props: CheckboxProps = Object.assign({}, props);

    if (context && context.value && context.onChange) {
        _props.checked = context.value.some((x) => x === props.value);
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
        <label className="checkbox-wrap" htmlFor={_props.id}>
            <CheckboxMini {..._props} type="checkbox" />
            <span className="checkbox-label">{props.children}</span>
        </label>
    );
}
