import { Text } from '@/design.system/text/text';
import React from 'react';
import styled from 'styled-components';

interface TagProps {
  title: string;
  color?: string;
}

const TagWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  width: fit-content;
`;

export function Tag({ title = '', color = '#033869' }: TagProps) {
  return (
    <TagWrapper style={{ backgroundColor: color }}>
      <Text weight={500} size={13} color={'#CCD0D2'}>
        {title}
      </Text>
    </TagWrapper>
  );
}
