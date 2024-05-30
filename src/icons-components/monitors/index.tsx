import React from 'react';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';
import { Logs, Trace, Metrics } from '@/assets/icons/monitors';

export const LogsIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Logs />
  </IconWrapper>
);

export const TraceIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Trace />
  </IconWrapper>
);

export const MetricsIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <Metrics />
  </IconWrapper>
);
