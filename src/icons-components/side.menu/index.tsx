import React from 'react';
import {
  FocusOverview,
  UnFocusOverview,
  FocusSources,
  UnFocusSources,
  FocusDestinations,
  UnFocusDestinations,
  FocusAction,
  UnFocusAction,
} from '@/assets';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';

export const FocusOverviewIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <FocusOverview />
  </IconWrapper>
);

export const UnFocusOverviewIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <UnFocusOverview />
  </IconWrapper>
);

export const FocusSourcesIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <FocusSources />
  </IconWrapper>
);

export const UnFocusSourcesIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <UnFocusSources />
  </IconWrapper>
);

export const FocusDestinationsIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <FocusDestinations />
  </IconWrapper>
);

export const UnFocusDestinationsIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <UnFocusDestinations />
  </IconWrapper>
);

export const FocusActionIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <FocusAction />
  </IconWrapper>
);

export const UnFocusActionIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <UnFocusAction />
  </IconWrapper>
);
