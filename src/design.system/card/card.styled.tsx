import styled from 'styled-components';

interface CardContainerProps {
  selected?: any;
  type?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: inline-flex;
  position: relative;
  height: fit-content;
  flex-direction: column;
  border-radius: 24px;
  border: ${({ selected, theme, type }) =>
    `1px solid ${
      selected
        ? theme.colors.secondary
        : type === 'primary'
        ? theme.colors.dark_blue
        : '#374a5b'
    }`};
  background: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.dark : '#0E1C28'};
  box-shadow: ${({ type }) =>
    type === 'primary'
      ? 'none'
      : '0px -6px 16px 0px rgba(0, 0, 0, 0.25),4px 4px 16px 0px rgba(71, 231, 241, 0.05),-4px 4px 16px 0px rgba(71, 231, 241, 0.05)'};
`;

export const CardHeader = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px 0px;
  box-shadow: none;
`;
