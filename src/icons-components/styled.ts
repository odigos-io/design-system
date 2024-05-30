import styled from 'styled-components';

export const IconWrapper = styled.div<{ size?: number }>`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
