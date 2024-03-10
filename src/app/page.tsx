'use client';
import React, { useState } from 'react';
import { DataFlow } from '..';
import { nodes, edges } from '@/design.system/data.flow/mock';

export default function Home() {
  return (
    <div style={{ background: '#0E1C28', height: '100vh' }}>
      <DataFlow nodes={nodes} edges={edges} />
    </div>
  );
}
