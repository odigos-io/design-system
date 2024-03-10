'use client';
import React, { useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import CenterNode from './keyval.middleware';
import NamespaceNode from './namespace.node.tsx';
import DestinationNode from './destination.node.tsx';
import ActionContainer from './action.node';
import 'reactflow/dist/style.css';
import { ControllerWrapper, DataFlowContainer } from './data.flow.styled';
import { IDataFlow } from './types';
import theme from '@/styles/palette';

const backgroundColor = theme.colors.light_dark;

const nodeTypes = {
  custom: CenterNode,
  namespace: NamespaceNode,
  destination: DestinationNode,
  action: ActionContainer,
};

function DataFlow({ nodes, edges, ...rest }: IDataFlow) {
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
