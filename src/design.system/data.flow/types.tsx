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
  animated: boolean;
  label?: string;
  style?: Record<string, any>;
  data?: any;
}

export interface IDataFlow {
  nodes: DataFlowNode[];
  edges: DataFlowEdge[];
}
