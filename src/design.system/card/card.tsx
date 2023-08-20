import React from 'react';
import { CardContainer, CardHeader } from './card.styled';
import { Text } from '../text/text';

interface CardProps {
  children?: JSX.Element | JSX.Element[];
  focus?: any;
  type?: string;
  header?: {
    title: string;
    subtitle: string;
  };
}

export function Card({
  children,
  focus = false,
  type = 'primary',
  header,
}: CardProps) {
  return (
    <CardContainer selected={focus || undefined} type={type}>
      {header && (
        <CardHeader>
          <Text size={20} weight={600}>
            {header?.title}
          </Text>
          <Text size={14} color={'#CCD0D2'}>
            {header?.subtitle}
          </Text>
        </CardHeader>
      )}
      {children}
    </CardContainer>
  );
}
