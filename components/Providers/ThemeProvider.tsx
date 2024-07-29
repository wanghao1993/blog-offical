"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  // const { theme } = useTheme();
  // const [themeToken, setThemeToken] = useState({
  //   colorPrimary: "#b765c5",
  //   colorLink: "#b765c5",
  // });
  return (
    <ConfigProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ConfigProvider>
  );
}
