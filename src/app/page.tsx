'use client';
import {
  Button,
  Checkbox,
  DataFlow,
  MultiInputTable,
  Table,
  Text,
} from '@/design.system';
import { edges, nodes } from '@/design.system/data.flow/builder';
import React from 'react';

export default function Home() {
  const [values, setValues] = React.useState<string[]>(['']);
  const [checked, setChecked] = React.useState(false);
  return (
    <div style={{ background: '#0E1C28', height: '100vh', padding: 150 }}>
      <DataFlow nodes={nodes} edges={edges} />
    </div>
  );
}
