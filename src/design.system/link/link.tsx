import React from 'react';
import { Text } from '../text/text';
import { styled } from 'styled-components';

interface LinkProps {
  value: string;
  onClick?: () => void;
  fontSize?: number;
}

const LinkContainer = styled.div`
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;

export function Link({ value, onClick, fontSize = 16 }: LinkProps) {
  return (
    <LinkContainer onClick={onClick}>
      <Text size={fontSize} color="#0EE6F3">
        {value}
      </Text>
    </LinkContainer>
  );
}
