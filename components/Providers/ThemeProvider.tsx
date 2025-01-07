"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ConfigProvider } from "antd";
export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: "rgb(232 52 183)",
        },
      }}
    >
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ConfigProvider>
  );
}
