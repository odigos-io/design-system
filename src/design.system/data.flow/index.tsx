'use client';
import React, { useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import { IDataFlow } from './types';
import theme from '@/styles/palette';
import ActionNode from './action.node';
import CenterNode from './keyval.middleware';
import NamespaceNode from './namespace.node.tsx';
import DestinationNode from './destination.node.tsx';
import SourceNode from './source.node.tsx';
import { ControllerWrapper, DataFlowContainer } from './data.flow.styled';
import 'reactflow/dist/style.css';
import { Text } from '../text/text.tsx';

const backgroundColor = theme.colors.data_flow_bg;

const nodeTypes = {
  custom: CenterNode,
  namespace: NamespaceNode,
  destination: DestinationNode,
  action: ActionNode,
  source: SourceNode,
};

function DataFlow({ nodes, edges, ...rest }: IDataFlow) {
  const MONITORS = [
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

  const { fitView } = useReactFlow();

  useEffect(() => {
    setTimeout(() => {
      fitView();
    }, 100);
  }, [fitView, nodes, edges]);

  return (
    <DataFlowContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodeOrigin={[0.4, 0.4]}
        {...rest}
      >
        <ControllerWrapper>
          <div
            style={{
              position: 'absolute',
              zIndex: 999,
              top: 15,
              left: 60,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              backgroundColor: theme.colors.dark,
              padding: 10,
              borderRadius: 8,
              border: `1px solid ${theme.colors.blue_grey}`,
            }}
          >
            <Text size={14} weight={600}>
              Supported Signals
            </Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
              }}
            >
              {MONITORS.map((monitor) => (
                <div
                  key={monitor.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: monitor.color,
                      width: 10,
                      height: 10,
                      borderRadius: 8,
                      marginRight: 6,
                    }}
                  />
                  <Text size={12} weight={500}>
                    {monitor.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <Controls position="top-left" showInteractive={false} />
        </ControllerWrapper>
        <Background gap={12} size={1} style={{ backgroundColor }} />
      </ReactFlow>
    </DataFlowContainer>
  );
}

export function KeyvalDataFlow(props: IDataFlow) {
  return (
    <ReactFlowProvider>
      <DataFlow {...props} />
    </ReactFlowProvider>
  );
}
