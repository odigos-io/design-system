import React from 'react';
import {
  AddClusterInfo,
  DeleteAttribute,
  ErrorSampler,
  LatencySampler,
  PiiMasking,
  RenameAttribute,
  ProbabilisticSampler,
} from '@/assets';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';

export const AddClusterInfoIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <AddClusterInfo />
  </IconWrapper>
);

export const DeleteAttributeIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <DeleteAttribute />
  </IconWrapper>
);

export const RenameAttributeIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <RenameAttribute />
  </IconWrapper>
);

export const ErrorSamplerIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <ErrorSampler />
  </IconWrapper>
);

export const PiiMaskingIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <PiiMasking />
  </IconWrapper>
);

export const LatencySamplerIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <LatencySampler />
  </IconWrapper>
);

export const ProbabilisticSamplerIcon = ({ ...props }: HomeIconProps) => (
  <IconWrapper {...props}>
    <ProbabilisticSampler />
  </IconWrapper>
);
