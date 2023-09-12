import { useEffect, useState } from 'react';

export function useCopyToClipboard() {
  const [clipboardState, setClipboardState] = useState<boolean>(false);

  async function copyToClipboard(text: string) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setClipboardState(true);
      } catch (error) {
        setClipboardState(false);
      }
    } else {
      setClipboardState(false);
    }
  }

  return { clipboardState, copyToClipboard };
}
