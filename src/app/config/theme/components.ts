import type { Components, CssVarsTheme, Theme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import typography from "./typography";

type MuiComponentConfig = Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
>;
const components: MuiComponentConfig = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontFamily: typography.fontFamilies?.header,
        borderRadius: 8,
        padding: "6px 10px",
        minWidth: 120,
      },
      sizeSmall: {
        fontFamily: typography.fontFamilies?.primary,
        fontSize: 12,
        borderRadius: 16,
      },
      sizeMedium: {
        fontSize: 18,
        padding: "5px 12px",
      },
      sizeLarge: {
        fontSize: 24,
        padding: "5px 15px",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      body1: {
        marginBottom: 10,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.text.secondary,
        },
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.text.secondary,
        },
      }),
      notchedOutline: {
        borderRadius: 5,
        borderWidth: 2,
      },
      input: {
        fontSize: 20,
        padding: "12px 15px",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        transform: "none",
      },
    },
  },
};

export default components;
