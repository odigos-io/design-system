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

export const LogsIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <Logs />
  </IconWrapper>
);

export const LogsFocusIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <LogsFocus />
  </IconWrapper>
);

export const TraceIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <Traces />
  </IconWrapper>
);

export const TraceFocusIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <TracesFocus />
  </IconWrapper>
);

export const MetricsIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <Metrics />
  </IconWrapper>
);

export const MetricsFocusIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <MetricsFocus />
  </IconWrapper>
);
