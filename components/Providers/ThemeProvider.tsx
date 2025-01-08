"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme: nextTheme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm:
          nextTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          colorPrimary: "rgb(232 52 183)",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
