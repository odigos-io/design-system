// Import React and necessary components
import React, { useEffect, useState } from 'react';
import 'reactflow/dist/style.css';
import { Controls } from 'reactflow';
import theme from '@/styles/palette';
import styled from 'styled-components';
import { Text } from '../text/text.tsx';
import Open from '@/assets/icons/expand-arrow.svg';
import { ControllerWrapper } from './data.flow.styled.tsx';
// Define styled components
const ControllerPanelWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 60px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${theme.colors.dark};
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.blue_grey};
  button {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.blue_grey}`};
    background: #0e1c28 !important;
    margin-bottom: 8px;
  }

  .react-flow__controls button path {
    fill: #fff;
  }
`;

const MonitorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const MonitorIndicator = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 10px;
  height: 10px;
  border-radius: 8px;
  margin-right: 6px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

// TypeScript type for monitor items
interface MonitorItem {
  name: string;
  color: string;
}

export function DataFlowControlPanel() {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 7000);
  }, []);

  const MONITORS: MonitorItem[] = [
    {
      name: 'Traces',
      color: theme.colors.traces,
    },
    {
      name: 'Logs',
      color: theme.colors.logs,
    },
    {
      name: 'Metrics',
      color: theme.colors.metrics,
    },
  ];

  return (
    <>
      <ControllerPanelWrapper>
        <TitleWrapper onClick={() => setOpen(!isOpen)}>
          <Text size={14} weight={600}>
            Supported Signals
          </Text>
          <Open />
        </TitleWrapper>
        {isOpen && (
          <MonitorItem>
            {MONITORS.map((monitor) => (
              <div
                key={monitor.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MonitorIndicator color={monitor.color} />
                <Text size={12} weight={500}>
                  {monitor.name}
                </Text>
              </div>
            ))}
          </MonitorItem>
        )}
      </ControllerPanelWrapper>
      <ControllerWrapper>
        <Controls position="top-left" showInteractive={false} />
      </ControllerWrapper>
    </>
  );
}
