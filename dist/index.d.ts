import * as React from 'react';
import React__default, { FC, ChangeEvent, ButtonHTMLAttributes } from 'react';

interface RadioButtonProps {
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const KeyvalRadioButton: FC<RadioButtonProps>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}
declare const KeyvalButton: FC<ButtonProps>;

type FloatBoxProps = {
    style?: object;
    children: any;
};
declare function FloatBox({ children, style }: FloatBoxProps): React__default.JSX.Element;

type TextProps = {
    type?: string | any;
    value?: string;
    style?: object;
    children?: string | any;
    weight?: string | number;
    color?: string;
    size?: number;
};
declare function KeyvalText({ children, color, style, weight, size, }: TextProps): React__default.JSX.Element;

interface CardProps {
    children: React__default.ReactNode;
    focus?: any;
}
declare function KeyvalCard({ children, focus }: CardProps): React__default.JSX.Element;

interface TagProps {
    title: string;
    color?: string;
}
declare function KeyvalTag({ title, color }: TagProps): React__default.JSX.Element;

interface TapProps {
    icons: object;
    title?: string;
    tapped?: any;
    onClick?: any;
    children?: React__default.ReactNode;
    style?: React__default.CSSProperties;
}
declare function KeyvalTap({ title, tapped, children, style, onClick, }: TapProps): React__default.JSX.Element;

interface DropDownItem {
    id: number;
    label: string;
}
interface KeyvalDropDownProps {
    data: DropDownItem[];
    onChange: (item: DropDownItem) => void;
    childComp?: React__default.ReactNode;
    width?: number;
    value?: DropDownItem | null;
}
declare function KeyvalDropDown({ data, onChange, childComp, width, value, }: KeyvalDropDownProps): React__default.JSX.Element;

interface KeyvalSearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    loading?: boolean;
    containerStyle?: any;
    inputStyle?: any;
    showClear?: boolean;
}
declare function KeyvalSearchInput({ placeholder, value, onChange, loading, containerStyle, inputStyle, showClear, }: KeyvalSearchInputProps): React__default.JSX.Element;

interface KeyvalSwitchProps {
    toggle: boolean;
    handleToggleChange: () => void;
    style?: object;
    label?: string;
}
declare function KeyvalSwitch({ toggle, handleToggleChange, style, label, }: KeyvalSwitchProps): React__default.JSX.Element;

interface KeyvalCheckboxProps {
    value: boolean;
    onChange: () => void;
    label?: string;
    disabled?: boolean;
}
declare function KeyvalCheckbox({ onChange, value, label, disabled, }: KeyvalCheckboxProps): React__default.JSX.Element;

interface SelectedCounterProps {
    total: number;
    selected: number;
}
declare function KeyvalSelectedCounter({ total, selected, }: SelectedCounterProps): React__default.JSX.Element;

interface KeyvalLinkProps {
    value: string;
    onClick?: () => void;
}
declare function KeyvalLink({ value, onClick }: KeyvalLinkProps): React__default.JSX.Element;

declare function KeyvalTooltip(props: any): React__default.JSX.Element;

interface KeyvalImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: React__default.CSSProperties;
}
declare function KeyvalImage({ src, alt, width, height, style, }: KeyvalImageProps): React__default.JSX.Element;

interface InputProps$1 {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
    style?: React__default.CSSProperties;
}
declare function KeyvalInput({ label, value, onChange, type, error, style, }: InputProps$1): JSX.Element;

interface InputProps {
    value: string;
    onAction: () => void;
    onChange: (value: string) => void;
    type?: string;
    style?: React__default.CSSProperties;
}
declare function KeyvalActionInput({ value, onChange, style, onAction, }: InputProps): JSX.Element;

type VideoComponentProps = {
    videoSrc: string;
    title?: string;
    thumbnail?: string | undefined;
};
declare function KeyvalVideo({ videoSrc, title, thumbnail, }: VideoComponentProps): React__default.JSX.Element;

declare function KeyvalLoader(): React__default.JSX.Element;

interface KeyvalNotificationProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    onClose?: () => void;
}
declare function KeyvalNotification({ type, message, onClose, }: KeyvalNotificationProps): React__default.JSX.Element;

interface DataFlowNode {
    id: string;
    type: string;
    data: any;
    position: {
        x: number;
        y: number;
    };
}
interface DataFlowEdge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
    style?: {
        stroke: string;
    };
    data: any;
}
interface IDataFlow {
    nodes: DataFlowNode[];
    edges: DataFlowEdge[];
}

declare function KeyvalDataFlow(props: IDataFlow): React__default.JSX.Element;

interface DangerZoneProps {
    title: string;
    subTitle: string;
    btnText: string;
    onClick: () => void;
}
declare function DangerZone({ title, subTitle, btnText, onClick, }: DangerZoneProps): React__default.JSX.Element;

declare enum ModalPositionX {
    center = "center",
    right = "right",
    left = "left"
}
declare enum ModalPositionY {
    center = "center",
    start = "start",
    end = "end"
}
interface ModalConfig {
    title: string;
    showHeader: boolean;
    positionX: ModalPositionX;
    positionY: ModalPositionY;
    padding: string;
    showOverlay: boolean;
    footer?: {
        primaryBtnText: string;
        secondaryBtnText?: string;
        primaryBtnAction: () => void;
        secondaryBtnAction?: () => void;
    };
}
interface Props {
    show: boolean;
    config: ModalConfig;
    closeModal: () => void;
    children: JSX.Element | JSX.Element[];
}

declare function KeyvalModal({ children, closeModal, config }: Props): React.JSX.Element;

export { DangerZone, FloatBox, KeyvalActionInput, KeyvalButton, KeyvalCard, KeyvalCheckbox, KeyvalDataFlow, KeyvalDropDown, KeyvalImage, KeyvalInput, KeyvalLink, KeyvalLoader, KeyvalModal, KeyvalNotification, KeyvalRadioButton, KeyvalSearchInput, KeyvalSelectedCounter, KeyvalSwitch, KeyvalTag, KeyvalTap, KeyvalText, KeyvalTooltip, KeyvalVideo };
