'use client';
import { Checkbox, DataFlow, MultiInputTable, Table } from '@/design.system';
import { edges, nodes } from '@/design.system/data.flow/builder';
import React from 'react';

export default function Home() {
  const [values, setValues] = React.useState<string[]>(['']);
  const [checked, setChecked] = React.useState(false);
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
      <div>
        <Table
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
            1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7,
            8, 9, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 2, 3, 4,
            5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1,
            2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1,
          ]}
          renderTableHeader={() => <div>Header</div>}
          renderTableRows={() => <div>Row</div>}
          renderEmptyResult={() => <div>Empty</div>}
        />
      </div>
      <div>
        <Checkbox
          label="I agree to the terms and conditions"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <br />
        <Checkbox
          label="I agree to the terms and conditions"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <DataFlow nodes={nodes} edges={edges} />
    </div>
  );
}
