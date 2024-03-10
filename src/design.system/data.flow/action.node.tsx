import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { styled } from 'styled-components';
import { Text } from '@/design.system';
import { Folder } from '@/assets/icons/overview';

const ActionContainer = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 12px;
  border: ${({ theme }) => `solid 1px ${theme.colors.blue_grey}`};
  background: ${({ theme }) => theme.colors.light_dark};
  align-items: center;
  gap: 8px;
`;

const TextWrapper = styled.div`
  gap: 10px;
`;

export default memo(({ data, isConnectable }: any) => {
  return (
    <ActionContainer>
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
      <Folder width={32} />
      <TextWrapper>
        <Text size={14} weight={600}>
          {data?.name}
        </Text>
      </TextWrapper>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
    </ActionContainer>
  );
});
