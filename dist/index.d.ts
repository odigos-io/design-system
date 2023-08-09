import * as React from 'react';
import React__default, { FC, ChangeEvent, ReactNode } from 'react';

interface RadioButtonProps {
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const RadioButton: FC<RadioButtonProps>;

interface ButtonProps {
    variant?: "primary" | "secondary";
    children: any;
    onClick?: () => void;
    style?: object;
    disabled?: boolean;
}
declare const Button: FC<ButtonProps>;

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
declare function Text({ children, color, style, weight, size }: TextProps): React__default.JSX.Element;

interface CardProps {
    children: React__default.ReactNode;
    focus?: any;
}
declare function Card({ children, focus }: CardProps): React__default.JSX.Element;

interface TagProps {
    title: string;
    color?: string;
}
declare function Tag({ title, color }: TagProps): React__default.JSX.Element;

interface TapProps {
    icons: object;
    title?: string;
    tapped?: any;
    onClick?: any;
    children?: React__default.ReactNode;
    style?: React__default.CSSProperties;
}
declare function Tap({ title, tapped, children, style, onClick, }: TapProps): React__default.JSX.Element;

interface DropDownItem {
    id: number;
    label: string;
}
interface DropDownProps {
    data: DropDownItem[];
    onChange: (item: DropDownItem) => void;
    childComp?: React__default.ReactNode;
    width?: number;
    value?: DropDownItem | null;
}
declare function DropDown({ data, onChange, childComp, width, value, }: DropDownProps): React__default.JSX.Element;

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    loading?: boolean;
    containerStyle?: any;
    inputStyle?: any;
    showClear?: boolean;
}
declare function SearchInput({ placeholder, value, onChange, loading, containerStyle, inputStyle, showClear, }: SearchInputProps): React__default.JSX.Element;

interface SwitchProps {
    toggle: boolean;
    handleToggleChange: () => void;
    style?: object;
    label?: string;
}
declare function Switch({ toggle, handleToggleChange, style, label, }: SwitchProps): React__default.JSX.Element;

interface CheckboxProps {
    value: boolean;
    onChange: () => void;
    label?: string;
    disabled?: boolean;
}
declare function Checkbox({ onChange, value, label, disabled, }: CheckboxProps): React__default.JSX.Element;

interface SelectedCounterProps {
    total: number;
    selected: number;
}
declare function SelectedCounter({ total, selected }: SelectedCounterProps): React__default.JSX.Element;

interface LinkProps {
    value: string;
    onClick?: () => void;
}
declare function Link({ value, onClick }: LinkProps): React__default.JSX.Element;

declare function Tooltip(props: any): React__default.JSX.Element;

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: React__default.CSSProperties;
}
declare function ImageComponent({ src, alt, width, height, style, }: ImageProps): React__default.JSX.Element;

interface InputProps$1 {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
    style?: React__default.CSSProperties;
}
declare function Input({ label, value, onChange, type, error, style, }: InputProps$1): JSX.Element;

interface InputProps {
    value: string;
    onAction: () => void;
    onChange: (value: string) => void;
    type?: string;
    style?: React__default.CSSProperties;
}
declare function ActionInput({ value, onChange, style, onAction, }: InputProps): JSX.Element;

type VideoComponentProps = {
    videoSrc: string;
    title?: string;
    thumbnail?: string | undefined;
};
declare function Video({ videoSrc, title, thumbnail }: VideoComponentProps): React__default.JSX.Element;

declare function Loader(): React__default.JSX.Element;

interface NotificationProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    onClose?: () => void;
}
declare function Notification({ type, message, onClose }: NotificationProps): React__default.JSX.Element;

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

declare function Modal({ children, closeModal, config }: Props): React.JSX.Element;

interface ThemeProviderWrapperProps {
    children: ReactNode;
}
declare const ThemeProviderWrapper: React__default.FC<ThemeProviderWrapperProps>;

export { ActionInput, Button, Card, Checkbox, DangerZone, KeyvalDataFlow as DataFlow, DropDown, FloatBox, ImageComponent as Image, Input, Link, Loader, Modal, Notification, RadioButton, SearchInput, SelectedCounter, Switch, Tag, Tap, Text, ThemeProviderWrapper, Tooltip, Video };
