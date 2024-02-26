import React from 'react';
import styled from 'styled-components';
import { Text } from '../text/text';
import { Tooltip } from '../tooltip';
import theme from '@/styles/palette';
// Define the props for the TextArea component
export interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  label?: string;
  tooltip?: string;
  required?: boolean;
}

// Styled textarea
const StyledTextArea = styled.textarea<{ active?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;

  outline: none;
  color: ${({ theme }) => theme.text.white};
  font-family: ${theme.font_family.primary};
  background-color: ${({ theme }) => theme.colors.light_dark};
  border: ${({ theme, active }) =>
    `1px solid ${active ? theme.text.grey : theme.colors.blue_grey}`};
  &:hover {
    border: ${({ theme }) => `solid 1px ${theme.text.grey}`};
  }
`;
const LabelWrapper = styled.div`
  margin-bottom: 8px;
  text-align: start;
`;

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  rows = 4,
  cols = 50,
  tooltip,
  label,
  required,
}) => {
  return (
    <>
      {label && (
        <LabelWrapper>
          <Tooltip text={tooltip || ''}>
            <div style={{ display: 'flex', gap: 4 }}>
              <Text size={14} weight={600}>
                {label}
              </Text>
              {required && (
                <Text size={14} weight={600}>
                  {'*'}
                </Text>
              )}
            </div>
          </Tooltip>
        </LabelWrapper>
      )}
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        active={!!value}
      />
    </>
  );
};
