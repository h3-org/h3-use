import { useCallback, useEffect, useRef, useState } from 'react';

type UseCopyReturn = {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
};

// Fallback to old browsers
function fallbackCopy(str: string): boolean {
  const textarea = document.createElement('textarea');
  let success = false;

  textarea.value = str;
  textarea.setAttribute('readonly', '');

  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  document.body.appendChild(textarea);

  textarea.select();

  try {
    success = document.execCommand('copy');
  } catch {
    success = false;
  }

  document.body.removeChild(textarea);
  return success;
}

export function useCopy(duration: number = 1500): UseCopyReturn {
  const [copied, setCopied] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        let success = false;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);

          success = true;
        } else {
          success = fallbackCopy(text);
        }

        if (success) {
          if (!copied) setCopied(true);

          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => setCopied(false), duration);

          return true;
        } else {
          throw new Error('Copy command failed');
        }
      } catch (err: unknown) {
        console.error('Failed to copy text: ', err);
        return false;
      }
    },
    [duration],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    copied,
    copy,
  };
}
