"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ConfigProvider } from "antd";
export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ConfigProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ConfigProvider>
  );
}
