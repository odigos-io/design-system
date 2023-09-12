import React, { useEffect, useState } from 'react';
import { Copied, Copy } from '@/assets/icons';
import { styled } from 'styled-components';
import { Text } from '..';
import { useCopyToClipboard } from '@/hooks';
import theme from '@/styles/palette';

interface CodeProps {
  text: string;
  title?: string;
  highlightedWord?: {
    primary: {
      words: string[];
      color: string;
    };
    secondary?: {
      words: string[];
      color: string;
    };
  };
  onCopy?: () => void;
}

const CodeBlockContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.dark_blue}`};
  background: ${({ theme }) => theme.colors.dark};
  padding: 16px;
  text-align: start;
  gap: 10px;
  position: relative;
`;

const TextWrapper = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  width: 90%;
`;

const CopyIconWrapper = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 6px;
  width: 100%;
`;

export function Code({ text, highlightedWord, title, onCopy }: CodeProps) {
  const [primaryWords, setPrimaryWords] = useState<Map<string, string>>(
    new Map()
  );
  const [secondaryWords, setSecondaryWords] = useState<Map<string, string>>(
    new Map()
  );

  const { copyToClipboard, clipboardState } = useCopyToClipboard();

  useEffect(onload, [highlightedWord]);

  function onload() {
    if (highlightedWord) {
      highlightedWord.primary && handleSetPrimaryWords();
      highlightedWord.secondary && handleSetSecondaryWords();
    }
  }

  function handleSetPrimaryWords() {
    const primaryWordsMap = new Map();
    highlightedWord?.primary.words.forEach((word) => {
      primaryWordsMap.set(word, word);
    });
    setPrimaryWords(primaryWordsMap);
  }

  function handleSetSecondaryWords() {
    const secondaryWordsMap = new Map();
    highlightedWord?.secondary?.words.forEach((word) => {
      secondaryWordsMap.set(word, word);
    });
    setSecondaryWords(secondaryWordsMap);
  }

  function getWordColor(word: string) {
    if (primaryWords.has(word)) {
      return highlightedWord?.primary.color;
    }
    if (secondaryWords.has(word)) {
      return highlightedWord?.secondary?.color;
    }
    return theme.colors.white;
  }

  function handleCopy() {
    copyToClipboard(text);
    onCopy && onCopy();
  }

  return (
    <ComponentWrapper>
      {title && <Text size={14}>{title}</Text>}
      <CodeBlockContainer>
        <CopyIconWrapper onClick={handleCopy}>
          {!clipboardState ? (
            <Copy width={24} height={24} />
          ) : (
            <Copied width={24} height={24} />
          )}
        </CopyIconWrapper>
        <TextWrapper>
          {text.split(' ').map((part, index) => (
            <span key={index} style={{ color: getWordColor(part) }}>
              {`${part} `}
            </span>
          ))}
        </TextWrapper>
      </CodeBlockContainer>
    </ComponentWrapper>
  );
}
