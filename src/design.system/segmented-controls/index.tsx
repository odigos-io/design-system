'use client';

import React from 'react';
import styled from 'styled-components';
import { Text } from '..';
import { Folders } from '@/assets/icons';

const SegmentedControlsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;
const SegmentedControlsOption = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 12px;
  position: relative;
  text-align: center;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: ${({ theme }) => `1px solid  ${theme.colors.secondary}`};
  background-color: ${({ theme }) => theme.colors.dark};
  filter: brightness(50%);
  &.active {
    filter: brightness(100%);
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 16px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right: 16px;
  }
  label {
    font-family: ${({ theme }) => theme.font_family.primary};
  }
`;

const SegmentedControlsInput = styled.input`
  opacity: 0;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

export function SegmentedControls({
  options,
  selected,
  onChange,
  title,
}: {
  options: { label: string; id: string }[];
  selected: string;
  onChange: (selected: string) => void;
  title?: string;
}) {
  return (
    <div>
      {title && (
        <Text size={14} style={{ marginBottom: 10 }}>
          {title}
        </Text>
      )}
      <SegmentedControlsWrapper>
        {options?.map((option) => (
          <SegmentedControlsOption
            key={option.id}
            className={`${option.id === selected ? 'active' : ''}`}
          >
            <Folders />
            <SegmentedControlsInput
              type="radio"
              value={option.id}
              name={option.label}
              onChange={() => onChange(option.id)}
              checked={option.id === selected}
            />
            <Text>{option.label}</Text>
          </SegmentedControlsOption>
        ))}
      </SegmentedControlsWrapper>
    </div>
  );
}
