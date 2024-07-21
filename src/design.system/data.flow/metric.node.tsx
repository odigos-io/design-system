import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import { Text } from '@/design.system';
import theme from '@/styles/palette';

const MetricContainer = styled.div`
  display: inline-flex;
  height: 20px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  border: ${({ theme }) => `solid 1px ${theme.colors.blue_grey}`};
  background: ${({ theme }) => theme.colors.dark};
`;

const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface MetricNodeProps {
  isConnectable: boolean;
}

export default memo(({ isConnectable }: MetricNodeProps) => {
  return (
    <MetricContainer>
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />

      <TextWrapper>
        <Text color={theme.colors.light_grey}>{'3.8 KB/s'}</Text>
      </TextWrapper>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
    </MetricContainer>
  );
});
