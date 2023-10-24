import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '..';

const NoteContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-start !important;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  border-radius: 12px;
`;

const TextContainer = styled.div`
  line-height: 1.6;
  code {
    background-color: ${({ theme }) => theme.colors.dark_blue};
    padding: 2px 4px;
    border-radius: 6px;
  }
`;

export function Note({ text, code }: { text: string; code?: string[] }) {
  useEffect(() => {
    buildNote();
  }, []);

  function buildNote() {
    let value = text;
    if (code) {
      code.forEach((c, index) => {
        value = value.replace(`$code${index}`, `<code>${c}</code>`);
      });
    }

    return (
      <TextContainer
        dangerouslySetInnerHTML={{
          __html: `<p><strong>Note: </strong>${value}</p>`,
        }}
      ></TextContainer>
    );
  }

  return (
    <NoteContainer>
      <Text size={14}>{buildNote()}</Text>
    </NoteContainer>
  );
}
