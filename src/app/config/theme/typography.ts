import type { TypographyVariantsOptions } from "@mui/material";

declare module "@mui/material" {
  interface TypographyVariantsOptions {
    fontFamilies?: {
      primary: string;
      header: string;
    };
  }
  interface TypographyVariants {
    fontFamilies: {
      primary: string;
      header: string;
    };
  }
}

const headerFontFamily = "BebasNeue, Roboto, serif";

const typography: TypographyVariantsOptions = {
  fontFamily: "PTSans, Roboto, serif",
  fontSize: 18,
  h1: {
    fontSize: 32,
    fontFamily: headerFontFamily,
    marginBottom: 20,
  },
  body1: {
    fontSize: 20,
  },
  body2: {
    fontSize: 18,
  },
  fontFamilies: {
    primary: "PTSans, Roboto, serif",
    header: headerFontFamily,
  },
};

export default typography;
