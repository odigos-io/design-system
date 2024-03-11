import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { styled } from 'styled-components';
import { Text, Tooltip } from '@/design.system';
import { ACTION_ICONS } from '@/assets';
import theme from '@/styles/palette';

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 12px;
  border: ${({ theme }) => `solid 1px ${theme.colors.blue_grey}`};
  background: ${({ theme }) => theme.colors.dark};
  align-items: center;
  gap: 4px;
  width: 80px;
  height: 80px;
`;

const TextWrapper = styled.div`
  max-width: 72px;
  height: 40px;
  /* background-color: aliceblue; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(({ data, isConnectable }: any) => {
  const ActionIcon = ACTION_ICONS[data.type] ? ACTION_ICONS[data.type] : null;
  console.log({ data });
  return (
    <ActionContainer>
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
      <div>
        <ActionIcon style={{ width: 24, height: 24 }} />
      </div>
      <TextWrapper>
        <Text size={14} weight={600}>
          {data?.spec?.actionName}
        </Text>
      </TextWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          width: '100%',
        }}
      >
        {data.spec.signals.map((monitor: string) => (
          <div key={monitor} style={{ display: 'flex' }}>
            <span
              style={{
                backgroundColor: (theme.colors as any)[monitor.toLowerCase()],
                width: 8,
                height: 8,
                borderRadius: 8,
              }}
            />
          </div>
        ))}
      </div>
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
