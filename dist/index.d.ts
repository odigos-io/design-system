import React$1, { FC, ChangeEvent, ButtonHTMLAttributes, ReactNode, InputHTMLAttributes } from 'react';

interface RadioButtonProps {
    label?: string;
    value?: string | boolean;
    size?: number;
    textStyles?: React$1.CSSProperties;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const RadioButton: FC<RadioButtonProps>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    style?: object;
}
declare const Button: FC<ButtonProps>;

type FloatBoxProps = {
    style?: object;
    children: any;
};
declare function FloatBox({ children, style }: FloatBoxProps): React$1.JSX.Element;

type TextProps = {
    type?: string | any;
    value?: string;
    style?: object;
    children?: string | any;
    weight?: string | number;
    color?: string;
    size?: number;
};
declare function Text({ children, color, style, weight, size }: TextProps): React$1.JSX.Element;

interface CodeProps {
    text: string;
    title?: string;
    highlightedWord?: {
        primary: {
            words: string[];
            color: string;
        };
        secondary?: {
            words: string[];
            color: string;
        };
    };
    onCopy?: () => void;
}
declare function Code({ text, highlightedWord, title, onCopy }: CodeProps): React$1.JSX.Element;

interface CardProps {
    children?: JSX.Element | JSX.Element[];
    focus?: any;
    type?: string;
    header?: {
        title?: string;
        subtitle?: string;
        body?: () => JSX.Element | JSX.Element[];
    };
}
declare function Card({ children, focus, type, header, }: CardProps): React$1.JSX.Element;

interface TagProps {
    title: string;
    color?: string;
}
declare function Tag({ title, color }: TagProps): React$1.JSX.Element;

interface TapProps {
    icons: object;
    title?: string;
    tapped?: boolean;
    onClick?: any;
    children?: React$1.ReactNode;
    style?: React$1.CSSProperties;
}
declare function Tap({ title, tapped, children, style, onClick, }: TapProps): React$1.JSX.Element;

interface DropDownItem {
    id: number | string;
    label: string;
}
interface DropDownProps {
    data: DropDownItem[];
    onChange: (item: DropDownItem) => void;
    width?: number;
    value?: DropDownItem | null;
    label?: string;
    tooltip?: string;
    required?: boolean;
}
declare function DropDown({ data, onChange, width, value, label, tooltip, required, }: DropDownProps): React$1.JSX.Element;

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    loading?: boolean;
    containerStyle?: any;
    inputStyle?: any;
    showClear?: boolean;
}
declare function SearchInput({ placeholder, value, onChange, loading, containerStyle, inputStyle, showClear, }: SearchInputProps): React$1.JSX.Element;

interface SwitchProps {
    toggle: boolean;
    handleToggleChange: () => void;
    style?: object;
    label?: string;
}
declare function Switch({ toggle, handleToggleChange, style, label, }: SwitchProps): React$1.JSX.Element;

interface CheckboxProps {
    value: boolean;
    onChange: () => void;
    label?: string;
    disabled?: boolean;
}
declare function Checkbox({ onChange, value, label, disabled, }: CheckboxProps): React$1.JSX.Element;

interface SelectedCounterProps {
    total: number;
    selected: number;
}
declare function SelectedCounter({ total, selected }: SelectedCounterProps): React$1.JSX.Element;

interface LinkProps {
    value: string;
    onClick?: () => void;
    fontSize?: number;
    color?: string;
}
declare function Link({ value, onClick, fontSize, color, }: LinkProps): React$1.JSX.Element;

interface TooltipProps {
    children: ReactNode;
    text: string;
    icon?: ReactNode;
    showIcon?: boolean;
}
declare const Tooltip: React$1.FC<TooltipProps>;

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: React$1.CSSProperties;
}
declare function ImageComponent({ src, alt, width, height, style, }: ImageProps): React$1.JSX.Element;

interface InputProps$1 extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    onChange: (value: string) => void;
    error?: string;
    style?: React$1.CSSProperties;
    tooltip?: string;
}
declare function Input({ label, value, onChange, type, error, style, onKeyDown, tooltip, required, autoComplete, ...rest }: InputProps$1): JSX.Element;

interface InputProps {
    value: string;
    onAction: () => void;
    onChange: (value: string) => void;
    type?: string;
    style?: React$1.CSSProperties;
}
declare function ActionInput({ value, onChange, style, onAction, }: InputProps): JSX.Element;

type VideoComponentProps = {
    videoSrc: string;
    title?: string;
    thumbnail?: string | undefined;
};
declare function Video({ videoSrc, title, thumbnail }: VideoComponentProps): React$1.JSX.Element;

interface LoaderProps {
    width?: number;
    height?: number;
}
declare function Loader({ width, height }: LoaderProps): React$1.JSX.Element;

interface NotificationProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    onClose?: () => void;
}
declare function Notification({ type, message, onClose }: NotificationProps): React$1.JSX.Element;

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
    animated: boolean;
    label?: string;
    style?: Record<string, any>;
    data?: any;
}
interface IDataFlow {
    nodes: DataFlowNode[];
    edges: DataFlowEdge[];
}

declare function KeyvalDataFlow(props: IDataFlow): React$1.JSX.Element;

interface DangerZoneProps {
    title: string;
    subTitle: string;
    btnText: string;
    onClick: () => void;
}
declare function DangerZone({ title, subTitle, btnText, onClick, }: DangerZoneProps): React$1.JSX.Element;

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
        isDisabled?: boolean;
        link?: {
            text: string;
            onClick: () => void;
        };
        style?: {};
    };
}
interface Props {
    show: boolean;
    config: ModalConfig;
    closeModal: () => void;
    children: JSX.Element | JSX.Element[];
}

declare function Modal({ children, closeModal, config }: Props): React$1.JSX.Element;

interface ThemeProviderWrapperProps {
    children: ReactNode;
}
declare const ThemeProviderWrapper: React$1.FC<ThemeProviderWrapperProps>;

type StepListProps<T> = {
    data?: Array<T> | null;
};
declare function Steps<T>({ data }: StepListProps<T>): React$1.JSX.Element;

declare function Divider({ margin, label, }: {
    margin?: string;
    label?: string;
}): React$1.JSX.Element;

declare function Note({ text, code }: {
    text: string;
    code?: string[];
}): React$1.JSX.Element;

declare function SegmentedControls({ options, selected, onChange, title, }: {
    options: {
        label: string;
        id: string;
    }[];
    selected: string;
    onChange: (selected: string) => void;
    title?: string;
}): React$1.JSX.Element;

interface MultiInputProps {
    initialList?: string[];
    onListChange?: (list: string[]) => void;
    placeholder?: string;
    limit?: number;
    title?: string;
    tooltip?: string;
}
declare const MultiInput: React$1.FC<MultiInputProps>;

interface KeyValue {
    id: number;
    key: string;
    value: string;
}
interface KeyValueTableProps {
    keyValues: KeyValue[];
    setKeyValues: (keyValues: KeyValue[]) => void;
    title?: string;
    titleKey?: string;
    titleValue?: string;
    tooltip?: string;
    titleButton?: string;
    required?: boolean;
}
declare const KeyValueTable: React$1.FC<KeyValueTableProps>;

interface TextAreaProps {
    placeholder?: string;
    value?: string;
    onChange: (e: React$1.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    label?: string;
    tooltip?: string;
    required?: boolean;
}
declare const TextArea: React$1.FC<TextAreaProps>;

interface MultiInputTableProps {
    values: string[];
    title?: string;
    tooltip?: string;
    onValuesChange: (newValues: string[]) => void;
    required?: boolean;
    placeholder?: string;
}
declare const MultiInputTable: React$1.FC<MultiInputTableProps>;

interface Item {
    label: string;
    onClick: () => void;
    id: string;
    selected?: boolean;
    disabled?: boolean;
}
interface ActionItemProps {
    label: string;
    subTitle: string;
    items: Item[];
}
declare const ActionItem$1: React$1.FC<ActionItemProps>;

interface ActionItem {
    label: string;
    onClick: () => void;
    id: string;
    selected?: boolean;
    disabled?: boolean;
}
interface ActionGroup {
    label: string;
    subTitle: string;
    items: ActionItem[];
    condition?: boolean;
}
interface ActionsListProps {
    actionGroups: ActionGroup[];
}
declare const ActionsGroup: React$1.FC<ActionsListProps>;

type PaginationProps = {
    total: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};
declare const Pagination: React$1.FC<PaginationProps>;

type TableProps<T> = {
    data: T[];
    renderTableHeader: () => JSX.Element;
    renderTableRows: (item: T, index: number) => JSX.Element;
    renderEmptyResult: () => JSX.Element;
    onPaginate?: (pageNumber: number) => void;
};
declare const Table: <T>({ data, onPaginate, renderTableRows, renderTableHeader, renderEmptyResult, }: TableProps<T>) => React$1.JSX.Element;

declare const YMLEditor: ({ data }: {
    data: any;
}) => React$1.JSX.Element;

interface Source {
    name: string;
    kind: string;
    namespace: string;
    conditions?: {
        type: string;
        status: string;
        message: string;
        lastTransitionTime: string;
    }[];
    languages: Array<{
        container_name: string;
        language: string;
    }>;
}
interface Destination {
    id: string;
    name: string;
    type: string;
    signals: {
        traces: boolean;
        metrics: boolean;
        logs: boolean;
    };
    fields: Record<string, any>;
    conditions?: {
        type: string;
        status: string;
        message: string;
        lastTransitionTime: string;
    }[];
    destination_type: {
        type: string;
        display_name: string;
        image_url: string;
        supported_signals: {
            traces: {
                supported: boolean;
            };
            metrics: {
                supported: boolean;
            };
            logs: {
                supported: boolean;
            };
        };
    };
}
interface Action {
    id: string;
    type: string;
    spec: {
        actionName: string;
        notes: string;
        signals: string[];
    };
}
interface FlowNode {
    id: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    data: any;
}
interface FlowEdge {
    id: string;
    source: string;
    target: string;
    animated: boolean;
    label?: string;
    style?: Record<string, any>;
    data?: any;
}
declare const buildFlowNodesAndEdges: (sources: Source[], destinations: Destination[], actions: Action[]) => {
    nodes: FlowNode[];
    edges: FlowEdge[];
};

declare const LogsIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const LogsFocusIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const TraceIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const TraceFocusIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const MetricsIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const MetricsFocusIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;

declare const AddClusterInfoIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const DeleteAttributeIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const RenameAttributeIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const ErrorSamplerIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const PiiMaskingIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const LatencySamplerIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const ProbabilisticSamplerIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;

declare const PlusIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const BackIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const RightArrowIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const ChargeIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const ConnectIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const NoteIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const WhiteArrowIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const LinkIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const ExpandIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const CheckIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const CopyIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const CopiedIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const YamlIconIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const GreenCheckIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const RedErrorIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const BlueInfoIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;
declare const BellIcon: ({ size, color, ...props }: HomeIconProps) => React$1.JSX.Element;

declare const FocusOverviewIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const UnFocusOverviewIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const FocusSourcesIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const UnFocusSourcesIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const FocusDestinationsIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const UnFocusDestinationsIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const FocusActionIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;
declare const UnFocusActionIcon: ({ ...props }: HomeIconProps) => React$1.JSX.Element;

interface HomeIconProps {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    className?: string;
}

export { ActionInput, ActionItem$1 as ActionItem, ActionsGroup, AddClusterInfoIcon, BackIcon, BellIcon, BlueInfoIcon, Button, Card, ChargeIcon, CheckIcon, Checkbox, Code, ConnectIcon, CopiedIcon, CopyIcon, DangerZone, KeyvalDataFlow as DataFlow, DeleteAttributeIcon, Divider, DropDown, ErrorSamplerIcon, ExpandIcon, FloatBox, FocusActionIcon, FocusDestinationsIcon, FocusOverviewIcon, FocusSourcesIcon, GreenCheckIcon, HomeIconProps, ImageComponent as Image, Input, KeyValue, KeyValueTable, KeyValueTableProps, LatencySamplerIcon, Link, LinkIcon, Loader, LogsFocusIcon, LogsIcon, MetricsFocusIcon, MetricsIcon, Modal, MultiInput, MultiInputTable, MultiInputTableProps, Note, NoteIcon, Notification, Pagination, PiiMaskingIcon, PlusIcon, ProbabilisticSamplerIcon, RadioButton, RedErrorIcon, RenameAttributeIcon, RightArrowIcon, SearchInput, SegmentedControls, SelectedCounter, Steps, Switch, Table, Tag, Tap, Text, TextArea, TextAreaProps, ThemeProviderWrapper, Tooltip, TraceFocusIcon, TraceIcon, UnFocusActionIcon, UnFocusDestinationsIcon, UnFocusOverviewIcon, UnFocusSourcesIcon, Video, WhiteArrowIcon, YMLEditor, YamlIconIcon, buildFlowNodesAndEdges };
