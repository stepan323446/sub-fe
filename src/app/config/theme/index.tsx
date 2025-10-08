import "@/assets/fonts/fonts.css";
import { createTheme } from "@mui/material";

import typography from "./typography";
import components from "./components";
import palette from "./pallete";

const theme = createTheme({
  typography: typography,
  components: components,
  palette: palette,
});

export default theme;
