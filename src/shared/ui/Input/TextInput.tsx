import { InputAdornment, TextField } from "@mui/material";
import type { ComponentProps, ReactNode } from "react";

type TextInputProps = {
  icon?: ReactNode;
} & ComponentProps<typeof TextField>;

const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: props.icon && (
            <InputAdornment position="start">{props.icon}</InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default TextInput;
