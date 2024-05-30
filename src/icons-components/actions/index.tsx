import { AddClusterInfo, DeleteAttribute, RenameAttribute } from '@/assets';
import { HomeIconProps } from '..';
import { IconWrapper } from '../styled';

export const AddClusterInfoIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <AddClusterInfo />
  </IconWrapper>
);

export const DeleteAttributeIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <DeleteAttribute />
  </IconWrapper>
);

export const RenameAttributeIcon = ({
  size,
  color,
  ...props
}: HomeIconProps) => (
  <IconWrapper size={size} color={color} {...props}>
    <RenameAttribute />
  </IconWrapper>
);
