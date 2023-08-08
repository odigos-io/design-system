import React from "react";
import { CardContainer } from "./card.styled";
interface CardProps {
  children: React.ReactNode;
  focus?: any;
}
export function Card({ children, focus = false }: CardProps) {
  return (
    <CardContainer selected={focus || undefined}>{children}</CardContainer>
  );
}
