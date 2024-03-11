import React from 'react';
import theme from '@/styles/palette';
import { Text } from '@/design.system';
import { styled } from 'styled-components';
import { Handle, Position } from 'reactflow';
import { MONITORING_OPTIONS } from './monitors';

interface IconWrapperProps {
  tapped?: boolean | undefined | string;
}

const DestinationNodeContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  border-radius: 12px;
  gap: 8px;
  border: ${({ theme }) => `solid 1px ${theme.colors.blue_grey}`};
  background: ${({ theme }) => theme.colors.dark};
  align-items: center;
  justify-content: space-between;
  width: 430px;
`;

export const NodeDataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IMAGE_STYLE: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: 4,
  borderRadius: 10,
};

const IconWrapper = styled.div<IconWrapperProps>`
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  opacity: ${({ tapped }) => (tapped ? 1 : 0.4)};
`;

const MonitorsListWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default function DestinationNode({ data, isConnectable }: any) {
  function renderMonitors() {
    return MONITORING_OPTIONS.map((monitor) => (
      <IconWrapper
        key={monitor?.id}
        tapped={data?.signals?.[monitor?.type] ? 'true' : undefined}
        style={{
          border: `solid 2px ${
            (theme.colors as any)[monitor.type.toLowerCase()]
          }`,
        }}
      >
        {data?.signals?.[monitor?.type]
          ? monitor.icons.focus()
          : monitor.icons.notFocus()}
      </IconWrapper>
    ));
  }

  return (
    <DestinationNodeContainer>
      <NodeDataWrapper>
        <img
          src={data?.destination_type?.image_url}
          width={40}
          height={40}
          style={IMAGE_STYLE}
          alt=""
        />
        <TextWrapper>
          <Text color={'#8b92a5'}>{data?.name}</Text>
          <Text size={18} weight={600}>
            {data?.destination_type?.display_name}
          </Text>
        </TextWrapper>
      </NodeDataWrapper>
      <MonitorsListWrapper>{renderMonitors()}</MonitorsListWrapper>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
    </DestinationNodeContainer>
  );
}
