import React from 'react';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';
import {
  RightArrow,
  Charge,
  Connect,
  Note,
  WhiteArrow,
  Link,
  Expand,
  Check,
  Copy,
  Copied,
  YamlIcon,
  GreenCheck,
  RedError,
  BlueInfo,
  Bell,
  Back,
  Plus,
} from '@/assets';

export const PlusIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <Plus />
  </IconWrapper>
);

export const BackIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <Back />
  </IconWrapper>
);

export const RightArrowIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <RightArrow />
  </IconWrapper>
);

export const ChargeIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Charge />
  </IconWrapper>
);

export const ConnectIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Connect />
  </IconWrapper>
);

export const NoteIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Note />
  </IconWrapper>
);

export const WhiteArrowIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <WhiteArrow />
  </IconWrapper>
);

export const LinkIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Link />
  </IconWrapper>
);

export const ExpandIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Expand />
  </IconWrapper>
);

export const CheckIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Check />
  </IconWrapper>
);

export const CopyIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Copy />
  </IconWrapper>
);

export const CopiedIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Copied />
  </IconWrapper>
);

export const YamlIconIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <YamlIcon />
  </IconWrapper>
);

export const GreenCheckIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <GreenCheck />
  </IconWrapper>
);

export const RedErrorIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <RedError />
  </IconWrapper>
);

export const BlueInfoIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <BlueInfo />
  </IconWrapper>
);

export const BellIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Bell />
  </IconWrapper>
);
