import React, { FC, ChangeEvent, ReactNode } from 'react';

interface RadioButtonProps {
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const RadioButton: FC<RadioButtonProps>;

interface ButtonProps {
    variant?: string;
    children: JSX.Element | JSX.Element[];
    onClick?: () => void;
    style?: object;
    disabled?: boolean;
}
declare const Button: FC<ButtonProps>;

type FloatBoxProps = {
    style?: object;
    children: any;
};
declare function FloatBox({ children, style }: FloatBoxProps): React.JSX.Element;

type TextProps = {
    type?: string | any;
    value?: string;
    style?: object;
    children?: string | any;
    weight?: string | number;
    color?: string;
    size?: number;
};
declare function Text({ children, color, style, weight, size }: TextProps): React.JSX.Element;

interface CardProps {
    children?: JSX.Element | JSX.Element[];
    focus?: any;
    type?: string;
    header?: {
        title: string;
        subtitle: string;
    };
}
declare function Card({ children, focus, type, header, }: CardProps): React.JSX.Element;

interface TagProps {
    title: string;
    color?: string;
}
declare function Tag({ title, color }: TagProps): React.JSX.Element;

interface TapProps {
    icons: object;
    title?: string;
    tapped?: any;
    onClick?: any;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
declare function Tap({ title, tapped, children, style, onClick, }: TapProps): React.JSX.Element;

interface DropDownItem {
    id: number;
    label: string;
}
interface DropDownProps {
    data: DropDownItem[];
    onChange: (item: DropDownItem) => void;
    width?: number;
    value?: DropDownItem | null;
}
declare function DropDown({ data, onChange, width, value, }: DropDownProps): React.JSX.Element;

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    loading?: boolean;
    containerStyle?: any;
    inputStyle?: any;
    showClear?: boolean;
}
declare function SearchInput({ placeholder, value, onChange, loading, containerStyle, inputStyle, showClear, }: SearchInputProps): React.JSX.Element;

interface SwitchProps {
    toggle: boolean;
    handleToggleChange: () => void;
    style?: object;
    label?: string;
}
declare function Switch({ toggle, handleToggleChange, style, label, }: SwitchProps): React.JSX.Element;

interface CheckboxProps {
    value: boolean;
    onChange: () => void;
    label?: string;
    disabled?: boolean;
}
declare function Checkbox({ onChange, value, label, disabled, }: CheckboxProps): React.JSX.Element;

interface SelectedCounterProps {
    total: number;
    selected: number;
}
declare function SelectedCounter({ total, selected }: SelectedCounterProps): React.JSX.Element;

interface LinkProps {
    value: string;
    onClick?: () => void;
}
declare function Link({ value, onClick }: LinkProps): React.JSX.Element;

declare function Tooltip(props: any): React.JSX.Element;

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}
declare function ImageComponent({ src, alt, width, height, style, }: ImageProps): React.JSX.Element;

interface InputProps$1 {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
    style?: React.CSSProperties;
    placeholder?: string;
}
declare function Input({ label, value, onChange, type, error, style, placeholder, }: InputProps$1): JSX.Element;

interface InputProps {
    value: string;
    onAction: () => void;
    onChange: (value: string) => void;
    type?: string;
    style?: React.CSSProperties;
}
declare function ActionInput({ value, onChange, style, onAction, }: InputProps): JSX.Element;

type VideoComponentProps = {
    videoSrc: string;
    title?: string;
    thumbnail?: string | undefined;
};
declare function Video({ videoSrc, title, thumbnail }: VideoComponentProps): React.JSX.Element;

declare function Loader(): React.JSX.Element;

interface NotificationProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    onClose?: () => void;
}
declare function Notification({ type, message, onClose }: NotificationProps): React.JSX.Element;

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

declare function KeyvalDataFlow(props: IDataFlow): React.JSX.Element;

interface DangerZoneProps {
    title: string;
    subTitle: string;
    btnText: string;
    onClick: () => void;
}
declare function DangerZone({ title, subTitle, btnText, onClick, }: DangerZoneProps): React.JSX.Element;

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
declare const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps>;

type StepListProps<T> = {
    data?: Array<T> | null;
};
declare function Steps<T>({ data }: StepListProps<T>): React.JSX.Element;

declare function Divider({ margin, label, }: {
    margin?: string;
    label?: string;
}): React.JSX.Element;

export { ActionInput, Button, Card, Checkbox, DangerZone, KeyvalDataFlow as DataFlow, Divider, DropDown, FloatBox, ImageComponent as Image, Input, Link, Loader, Modal, Notification, RadioButton, SearchInput, SelectedCounter, Steps, Switch, Tag, Tap, Text, ThemeProviderWrapper, Tooltip, Video };
