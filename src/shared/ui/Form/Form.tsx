import { FormControl } from "@mui/material";
import type { ComponentProps } from "react";

type FormProps = ComponentProps<"form">;

const Form = (props: FormProps) => {
  return (
    <form {...props}>
      <FormControl fullWidth margin="dense">
        {props.children}
      </FormControl>
    </form>
  );
};

export default Form;
