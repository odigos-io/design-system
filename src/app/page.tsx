'use client';

import { Card, Divider, Input } from '@/design.system';

export default function Home() {
  return (
    <>
      <Card type={'secondary'}>
        <div style={{ padding: 60 }}>
          <Input
            value={''}
            label="test"
            placeholder="test"
            onChange={function (value: string): void {
              throw new Error('Function not implemented.');
            }}
            style={{ height: 42 }}
          />
          <Divider />
        </div>
      </Card>
    </>
  );
}
