import Question from '@/assets/icons/question.svg';
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from '../text/text';

// Styled tooltip container
const TooltipContainer = styled.div`
  display: inline-flex;
  align-items: center; // Align children and icon vertically
  position: relative;
`;

// Styled icon (using a simple div here, but you can replace it with an actual icon component)
const Icon = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

// Styled tooltip text
const TooltipText = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  max-width: 300px;
  width: 100%;
  text-align: left;
  /* Position the tooltip above the icon */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  transform: translateX(-0%);
  margin-bottom: 5px; // Space between the tooltip and the icon

  /* Fade in animation */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s;
`;

interface TooltipProps {
  children: ReactNode;
  text: string;
  icon?: ReactNode; // Optional icon prop if you want to customize the icon
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  icon = '?',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  if (!text) return <>{children}</>;

  return (
    <TooltipContainer onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <TooltipText isVisible={isVisible}>
        <Text size={12} weight={600}>
          {text}
        </Text>
      </TooltipText>
      <Icon>
        <Question />
      </Icon>
    </TooltipContainer>
  );
};
