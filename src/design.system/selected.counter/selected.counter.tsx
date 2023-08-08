import React from "react";
import { SelectedCounterWrapper } from "./selected.counter.styled";
import Checked from "@/assets/icons/check.svg";
import { Text } from "../text/text";

interface SelectedCounterProps {
  total: number;
  selected: number;
}

export function SelectedCounter({ total, selected }: SelectedCounterProps) {
  return (
    <SelectedCounterWrapper>
      {selected !== 0 && <Checked />}
      <Text size={13} weight={500}>{`${selected} / ${total}`}</Text>
    </SelectedCounterWrapper>
  );
}
