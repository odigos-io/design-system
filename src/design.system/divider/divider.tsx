import React from 'react';
import styled from 'styled-components';
import { Text } from '..';

const DividerContainer = styled.div<{ margin: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 23px;
  margin: ${({ margin }) => margin};
`;

const DividerLine = styled.div`
  width: 100%;
  border-top: 1px solid #8b92a5;
`;

export function Divider({
  margin = '32px 0',
  label = 'or',
}: {
  margin?: string;
  label?: string;
}) {
  return (
    <DividerContainer margin={margin}>
      <DividerLine />
      <Text size={14}>{label}</Text>
      <DividerLine />
    </DividerContainer>
  );
}
