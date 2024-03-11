import React from 'react';
import { Handle, Position } from 'reactflow';
import { Logo } from '@/assets';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const flickerAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

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
    animation: ${flickerAnimation} 1s infinite alternate;
  }
`;

const InnerWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: solid 1px #3a3a3a76;
  background: #110c1f7d;
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: solid 1px #3a3a3aa9;
  background: #110c1f;
  position: relative;
  z-index: 99;
`;

// TypeScript Props Interface
interface OdigosCenterNodeProps {
  isConnectable: boolean;
}

const OdigosCenterNode: React.FC<OdigosCenterNodeProps> = ({
  isConnectable,
}) => {
  return (
    <FlickerWrapper>
      <InnerWrapper>
        <LogoContainer>
          <Image
            src={Logo}
            alt="logo"
            width={64}
            height={64}
            style={{ borderRadius: '50%' }}
          />
        </LogoContainer>
      </InnerWrapper>
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
};

export default OdigosCenterNode;
