export interface CheckboxProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * ID
     */
    id?: string;
    /**
     * 同原生input checkbox一样的name
     */
    name?: string;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 复选框是否选中
     */
    checked?: boolean;
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean;
    /**
     * 不确定状态
     */
    indeterminate?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 是否自动聚集焦点
     */
    autoFocus?: boolean;
    /**
     * 类型
     */
    type?: "checkbox" | "radio";
    /**
     * 同原生input checkbox一样的value
     */
    value?: any;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * Checkbox值更改事件
     */
    onChange?: (chcked: boolean, value: any) => void;
    /**
     * Checkbox聚集焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox点击事件
     */
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export interface CheckboxGroupProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否禁用整个组
     */
    disabled?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 选中复选框值集合
     */
    value?: any[];
    /**
     * 默认选中复选框值集合
     */
    defaultValue?: any[];
    /**
     * change事件
     */
    onChange?: (val: any[], checkedAll: boolean) => void;
}

export interface RadioGroupProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否禁用整个组
     */
    disabled?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 选中复选框值集合
     */
    value?: any;
    /**
     * 默认选中复选框值集合
     */
    defaultValue?: any;
    /**
     * change事件
     */
    onChange?: (val: any) => void;
}

export interface GroupContextState {
    /**
     * 选中复选框值集合
     */
    value?: any[];
    /**
     * 是否禁用整个组
     */
    disabled?: boolean;
    /**
     * checkbox/radio 改变事件
     */
    onChange?: (chcked: boolean, value: any) => void;
    /**
     * 添加 checkbox/radio
     */
    onAdd?: (value: any) => void;
    /**
     * 移除 checkbox/radio
     */
    onRemove?: (value: any) => void;
}
