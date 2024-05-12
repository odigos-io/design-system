import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import { Text } from '@/design.system';
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
  min-width: 80px;
`;

const TextWrapper = styled.div`
  max-width: 72px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignalIndicator = styled.span<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 8px;
  height: 8px;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

interface ActionNodeProps {
  data: {
    type: string;
    spec?: {
      actionName?: string;
      signals: string[];
    };
  };
  isConnectable: boolean;
}

export default memo(({ data, isConnectable }: ActionNodeProps) => {
  const ActionIcon = ACTION_ICONS[data.type] ? ACTION_ICONS[data.type] : null;

  return (
    <ActionContainer>
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
      {ActionIcon && (
        <IconWrapper>
          <ActionIcon />
        </IconWrapper>
      )}
      <TextWrapper>
        <Text size={14} weight={600}>
          {data?.spec?.actionName || 'Action'}
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
        {data.spec?.signals.map((monitor: string) => (
          <SignalIndicator
            key={monitor}
            backgroundColor={(theme.colors as any)[monitor.toLowerCase()]}
          />
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
