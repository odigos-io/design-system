import React from 'react';
import { TextWrapper } from './text.styled';

type TextProps = {
  type?: string | any;
  value?: string;
  style?: object;
  children?: string | any;
  weight?: string | number;
  color?: string;
  size?: number;
};

export function Text({
  children,
  color,
  style,
  weight,
  size,
  ...rest
}: TextProps) {
  return (
    <TextWrapper
      style={{
        fontWeight: weight,
        color,
        fontSize: size,
        ...style,
      }}
      {...rest}
    >
      {children}
    </TextWrapper>
  );
}
