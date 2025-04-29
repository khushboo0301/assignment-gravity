// src/components/ThemeProvider.tsx
import { useEffect } from "react";

type ThemeProviderProps = {
  theme?: string;
  children: React.ReactNode;
};

export const ThemeProvider = ({
  theme = "taskoo",
  children,
}: ThemeProviderProps) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    console.log("Applying theme:", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};
