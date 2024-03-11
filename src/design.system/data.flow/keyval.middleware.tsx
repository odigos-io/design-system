import React from 'react';
import { Handle, Position } from 'reactflow';
import { Logo } from '@/assets';
import Image from 'next/image';
import styled from 'styled-components';

const FlickerWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  position: relative;
  z-index: 90;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 60px;
    background: #110c1f55;
    z-index: -1;
    animation: flicker 1s infinite alternate;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  z-index: 99;
`;

export default function OdigosCenterNode({ isConnectable }: any) {
  return (
    <FlickerWrapper>
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
            borderRadius: 40,
            border: 'solid 1px #3a3a3aa9',
            background: '#110c1f',
          }}
        >
          <LogoWrapper>
            <Image
              src={Logo}
              alt="logo"
              width={64}
              height={64}
              style={{ borderRadius: '50%' }}
            />
          </LogoWrapper>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ visibility: 'hidden' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
        style={{ visibility: 'hidden' }}
      />
    </FlickerWrapper>
  );
}
