import type { OnlyChildrenProps } from "@shared/index";
import { AuthProvider } from "@entities/User";
import AppThemeProvider from "./ThemeProvider";

const AppProvider = ({ children }: OnlyChildrenProps) => {
  return (
    <AppThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppThemeProvider>
  );
};

export default AppProvider;
