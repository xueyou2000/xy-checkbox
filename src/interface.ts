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
     * 复选框是否选中
     */
    checked?: boolean;
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean;
    /**
     * ID
     */
    id?: string;
    /**
     * 同原生input checkbox一样的name
     */
    name?: string;
    /**
     * 类型
     * @description 复选框还是单选框
     */
    type?: "checkbox" | "radio";
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否自动聚集焦点
     */
    autoFocus?: boolean;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
