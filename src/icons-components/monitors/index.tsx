import React from 'react';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';
import {
  Logs,
  LogsFocus,
  Metrics,
  MetricsFocus,
  Traces,
  TracesFocus,
} from '@/assets';

export const LogsIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Logs />
  </IconWrapper>
);

export const LogsFocusIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <LogsFocus />
  </IconWrapper>
);

export const TraceIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Traces />
  </IconWrapper>
);

export const TraceFocusIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <TracesFocus />
  </IconWrapper>
);

export const MetricsIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Metrics />
  </IconWrapper>
);

export const MetricsFocusIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <MetricsFocus />
  </IconWrapper>
);
