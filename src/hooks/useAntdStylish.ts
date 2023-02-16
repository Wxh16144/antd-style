import { useMemo } from 'react';

import { reactCss } from '@/core/engine';
import { createAntdStylish } from '@/stylish/button';
import { AntdStylish } from '@/types';

import { convertStylishToString } from '@/utils/convertStylish';
import { useAntdToken } from './useAntdToken';
import { useThemeMode } from './useThemeMode';

export const useAntdStylish = (): AntdStylish => {
  const token = useAntdToken();
  const { appearance, isDarkMode } = useThemeMode();

  return useMemo(
    () =>
      convertStylishToString(createAntdStylish({ token, css: reactCss, appearance, isDarkMode })),
    [token, appearance, isDarkMode],
  );
};
