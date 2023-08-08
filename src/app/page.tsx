"use client";
import {
  KeyvalButton,
  KeyvalCard,
  KeyvalCheckbox,
  KeyvalText,
} from "@/design.system";
import Checked from "@/assets/icons/checkbox-rect.svg";
export default function Home() {
  return (
    <main>
      <KeyvalText color="#000" size={14} weight={600}>
        Hello World
      </KeyvalText>
      <KeyvalButton>
        <KeyvalText color="#000" size={14} weight={600}>
          Hello World
        </KeyvalText>
      </KeyvalButton>
      <KeyvalCard>
        <KeyvalText color="#000" size={14} weight={600}>
          Hello World
        </KeyvalText>
      </KeyvalCard>
      <KeyvalCheckbox value={false} onChange={() => {}} label={""} />
      {/* <Checked /> */}
    </main>
  );
}
