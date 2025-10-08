import { ThemeProvider } from "@mui/material/styles";
import type { OnlyChildrenProps } from "@/shared/index";
import theme from "../config/theme";
import { CssBaseline } from "@mui/material";

const AppThemeProvider = ({ children }: OnlyChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
