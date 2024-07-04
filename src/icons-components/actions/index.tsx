import React from 'react';
import { AddClusterInfo, DeleteAttribute, RenameAttribute } from '@/assets';
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
