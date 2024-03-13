'use client';
import { MultiInputTable } from '@/design.system';
import React from 'react';

export default function Home() {
  const [values, setValues] = React.useState<string[]>(['']);
  return (
    <div style={{ background: '#0E1C28', height: '100vh', padding: 150 }}>
      <MultiInputTable
        title="Languages"
        placeholder="dsfd"
        values={values}
        tooltip="sfds"
        required
        onValuesChange={(newValues: string[]) => setValues(newValues)}
      />
    </div>
  );
}
