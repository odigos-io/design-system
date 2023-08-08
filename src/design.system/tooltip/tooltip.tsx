import React, { useState } from "react";
import Question from "@/assets/icons/question.svg";
import { TooltipContentWrapper, TooltipWrapper } from "./tooltip.styled";
import { Text } from "../text/text";

export function Tooltip(props: any) {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {active && (
        <TooltipContentWrapper>
          <Text size={12} weight={500}>
            {props.content}
          </Text>
        </TooltipContentWrapper>
      )}
      <Question />
    </TooltipWrapper>
  );
}
