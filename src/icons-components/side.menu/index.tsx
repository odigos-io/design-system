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

export const FocusOverviewIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <FocusOverview />
  </IconWrapper>
);

export const UnFocusOverviewIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <UnFocusOverview />
  </IconWrapper>
);

export const FocusSourcesIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <FocusSources />
  </IconWrapper>
);

export const UnFocusSourcesIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <UnFocusSources />
  </IconWrapper>
);

export const FocusDestinationsIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <FocusDestinations />
  </IconWrapper>
);

export const UnFocusDestinationsIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <UnFocusDestinations />
  </IconWrapper>
);

export const FocusActionIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <FocusAction />
  </IconWrapper>
);

export const UnFocusActionIcon = ({ size, color, ...props }: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <UnFocusAction />
  </IconWrapper>
);
