import React, { useContext } from "react";
import { CheckboxProps } from "./interface";
import { Checkbox } from "./Checkbox";

export default function Radio(props: CheckboxProps) {
    return <Checkbox {...props} type="radio" />;
}
