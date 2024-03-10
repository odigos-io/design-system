import React from 'react';
import { Handle, Position } from 'reactflow';
import { Logo } from '@/assets';
import Image from 'next/image';

export default function OdigosCenterNode({ isConnectable }: any) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        border: 'solid 1px #3a3a3a11',
        background: '#110c1f55',
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          border: 'solid 1px #3a3a3a76',
          background: '#110c1f7d',
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            border: 'solid 1px #3a3a3aa9',
            background: '#110c1f',
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            style={{ visibility: 'hidden' }}
          />
          <Image
            src={Logo}
            alt="logo"
            width={64}
            height={64}
            style={{ borderRadius: 100 }}
          />
          <Handle
            type="source"
            position={Position.Right}
            id="a"
            isConnectable={isConnectable}
            style={{ visibility: 'hidden' }}
          />
        </div>
      </div>
    </div>
  );
}
