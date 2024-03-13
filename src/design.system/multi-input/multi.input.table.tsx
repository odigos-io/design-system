import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '@/styles/palette';
import { Tooltip } from '../tooltip';
import { Text } from '../text/text';
import { Trash } from '@/assets/icons';

export const Container = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Table = styled.table`
  border: solid 1px ${theme.text.grey};
  text-align: center;
  border-spacing: 0;
  border-radius: 8px;
  width: 100%;
`;

export const Th = styled.th`
  padding: 4px;
`;

export const Td = styled.td<{ right?: boolean; left?: boolean }>`
  padding: 8px 0;

  border-bottom: solid 1px ${theme.text.grey};
  border-right: ${({ right }) =>
    right ? `solid 1px ${theme.text.grey}` : 'none'};
  border-left: ${({ left }) =>
    left ? `solid 1px ${theme.text.grey}` : 'none'};
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  width: 94%;

  outline: none;
  color: ${theme.text.white};
`;

export const AddRowButton = styled.td`
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;

export interface MultiInputTableProps {
  values: string[];
  title?: string;
  tooltip?: string;
  onValuesChange: (newValues: string[]) => void;
  required?: boolean;
  placeholder?: string;
}

export const MultiInputTable: React.FC<MultiInputTableProps> = ({
  values,
  title,
  tooltip,
  onValuesChange,
  required,
  placeholder,
}) => {
  const addRow = () => {
    onValuesChange([...values, '']);
  };

  const deleteRow = (index: number) => {
    const updatedValues = values.filter((_, i) => i !== index);
    onValuesChange(updatedValues);
  };

  const updateValue = (index: number, newValue: string) => {
    const updatedValues = values.map((value, i) =>
      i === index ? newValue : value
    );
    onValuesChange(updatedValues);
  };

  return (
    <Container>
      {title && (
        <TitleWrapper>
          <Tooltip text={tooltip || ''}>
            <div style={{ display: 'flex', gap: 4 }}>
              <Text size={14} weight={600}>
                {title}
              </Text>
              {required && (
                <Text size={14} weight={600}>
                  {'*'}
                </Text>
              )}
            </div>
          </Tooltip>
        </TitleWrapper>
      )}
      <Table>
        <tbody>
          {values.map((value, index) => (
            <tr key={index}>
              <Td right>
                <Input
                  type="text"
                  value={value}
                  onChange={(e) => updateValue(index, e.target.value)}
                  placeholder={index === 0 ? placeholder : ''}
                />
              </Td>
              <Td
                onClick={() => deleteRow(index)}
                style={{ cursor: 'pointer' }}
              >
                <Trash />
              </Td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <AddRowButton onClick={addRow} colSpan={2}>
              <Text weight={400} size={14} color={theme.colors.torquiz_light}>
                Add Row
              </Text>
            </AddRowButton>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};
