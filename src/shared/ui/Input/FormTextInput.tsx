import type { ComponentProps } from "react";
import { Controller } from "react-hook-form";
import TextInput from "./TextInput";

interface FormTextInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  props?: ComponentProps<typeof TextInput>;
}

const FormTextInput = ({ name, control, props }: FormTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(renderProps) => (
        <TextInput
          onChange={renderProps.field.onChange}
          value={renderProps.field.value}
          error={!!renderProps.fieldState.error}
          helperText={renderProps.fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};

export default FormTextInput;
