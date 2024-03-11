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
import ActionContainer from './action.node';
import CenterNode from './keyval.middleware';
import NamespaceNode from './namespace.node.tsx';
import DestinationNode from './destination.node.tsx';
import { ControllerWrapper, DataFlowContainer } from './data.flow.styled';
import 'reactflow/dist/style.css';
import { Text } from '../text/text.tsx';

const backgroundColor = theme.colors.data_flow_bg;

const nodeTypes = {
  custom: CenterNode,
  namespace: NamespaceNode,
  destination: DestinationNode,
  action: ActionContainer,
};

function DataFlow({ nodes, edges, ...rest }: IDataFlow) {
  const MONITORS = [
    {
      name: 'Trace',
      color: theme.colors.traces,
    },
    {
      name: 'Log',
      color: theme.colors.logs,
    },
    {
      name: 'Metric',
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
        <div
          style={{
            position: 'absolute',
            zIndex: 999,
            top: 20,
            left: 70,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {MONITORS.map((monitor) => (
            <div key={monitor.name} style={{ display: 'flex' }}>
              <span
                style={{
                  backgroundColor: monitor.color,
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  marginRight: 8,
                }}
              />
              <Text>{monitor.name}</Text>
            </div>
          ))}
        </div>
        <ControllerWrapper>
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
