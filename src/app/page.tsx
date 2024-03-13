'use client';
import { MultiInputTable } from '@/design.system';
import React from 'react';

export default function Home() {
  const [values, setValues] = React.useState<string[]>(['']);
  return (
    <div style={{ background: '#0E1C28', height: '100vh' }}>
      <MultiInputTable
        title="Languages"
        values={values}
        tooltip="sfds"
        required
        onValuesChange={(newValues: string[]) => setValues(newValues)}
      />
    </div>
  );
}
