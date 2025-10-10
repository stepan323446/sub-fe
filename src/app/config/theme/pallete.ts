import type { PaletteColorOptions } from "@mui/material/styles";
import type { PaletteOptions } from "@mui/material";
import * as color from "./colors";
import type { PaletteColor } from "@mui/material/styles";

declare module "@mui/material" {
  interface PaletteOptions {
    blockBorder?: PaletteColorOptions;

    gradientStart?: PaletteColorOptions;
    gradientEnd?: PaletteColorOptions;
  }
  interface Palette {
    blockBorder: PaletteColor;

    gradientStart: PaletteColor;
    gradientEnd: PaletteColor;
  }
}

const palette: PaletteOptions = {
  primary: color.primaryBlue,
  secondary: color.secondaryTextColor,
  blockBorder: color.blockBorderColor,

  gradientStart: color.gradientStartColor,
  gradientEnd: color.gradientEndColor,

  background: {
    default: "#F2F2F2",
    paper: "#ffffff",
  },
  text: {
    secondary: color.secondaryTextColor.main,
  },
};

export default palette;
