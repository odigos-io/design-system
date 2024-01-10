import React from 'react';
import { Text } from '../text/text';
import { styled } from 'styled-components';
import theme from '@/styles/palette';

interface LinkProps {
  value: string;
  onClick?: () => void;
  fontSize?: number;
  color?: string;
}

const LinkContainer = styled.div`
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;

export function Link({
  value,
  onClick,
  fontSize = 16,
  color = theme.colors.secondary,
}: LinkProps) {
  return (
    <LinkContainer onClick={onClick}>
      <Text size={fontSize} color={color}>
        {value}
      </Text>
    </LinkContainer>
  );
}
