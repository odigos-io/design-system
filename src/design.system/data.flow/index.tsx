'use client';
import React, { useEffect } from 'react';
import ReactFlow, {
  Background,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import { IDataFlow } from './types';
import theme from '@/styles/palette';
import ActionNode from './action.node.tsx';
import CenterNode from './keyval.middleware';
import NamespaceNode from './namespace.node.tsx';
import DestinationNode from './destination.node.tsx';
import SourceNode from './source.node.tsx';
import { DataFlowContainer } from './data.flow.styled';
import 'reactflow/dist/style.css';
import { DataFlowControlPanel } from './control.panel.tsx';

const backgroundColor = theme.colors.data_flow_bg;

const nodeTypes = {
  custom: CenterNode,
  namespace: NamespaceNode,
  destination: DestinationNode,
  action: ActionNode,
  source: SourceNode,
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
        <DataFlowControlPanel />
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
