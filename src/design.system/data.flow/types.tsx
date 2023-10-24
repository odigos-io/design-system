interface DataFlowNode {
  id: string;
  type: string;
  data: any;
  position: { x: number; y: number };
}
interface DataFlowEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: { stroke: string };
  data: any;
}

export interface IDataFlow {
  nodes: DataFlowNode[];
  edges: DataFlowEdge[];
}

const nodes = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
  },
];

const edge = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#fff' },
    data: { label: 'Edge label' },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    animated: true,
    style: { stroke: '#fff' },
    data: { label: 'Edge label' },
  },
];
