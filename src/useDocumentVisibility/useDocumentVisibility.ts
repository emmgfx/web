import { useState } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
import { useMountEffect } from '../useMountEffect/useMountEffect';
import { isBrowser } from '../util/const';

const isDocumentVisible = () => document.visibilityState === 'visible';

export function useDocumentVisibility(initializeWithValue: false): boolean | undefined;
export function useDocumentVisibility(initializeWithValue?: true): boolean;
/**
 * Returns a boolean indicating whether the document is visible or not.
 *
 * @param initializeWithValue Whether to initialize state with the cookie value or `undefined`.
 *        _We suggest setting this to `false` during SSR._
 */
export function useDocumentVisibility(initializeWithValue = true): boolean | undefined {
  const [isVisible, setIsVisible] = useState(
    isBrowser && initializeWithValue ? isDocumentVisible() : undefined
  );

  useMountEffect(() => {
    if (!initializeWithValue) {
      setIsVisible(isDocumentVisible());
    }
  });

  useEventListener(isBrowser ? document : null, 'visibilitychange', () =>
    setIsVisible(isDocumentVisible())
  );

  return isVisible;
}