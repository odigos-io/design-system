'use client';
import React from 'react';
import { Card } from '../design.system/card/card';
import { Text } from '../design.system/text/text';
import { Tag } from '..';
export default function Home() {
  return (
    <div style={{ background: '#0E1C28' }}>
      <Card
        type={'secondary'}
        header={{
          body: () => (
            <div
              style={{
                width: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            ></div>
          ),
        }}
      >
        <Tag title={'#tag'} />
        <div style={{ width: 600, height: 600 }}></div>
      </Card>
    </div>
  );
}
