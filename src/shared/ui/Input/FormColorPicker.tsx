import type { ComponentProps } from "react";
import { Controller } from "react-hook-form";
import { MuiColorInput } from "mui-color-input";

interface FormColorPickerProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  props?: Omit<ComponentProps<typeof MuiColorInput>, "value" | "onChange">;
}

const FormColorPicker = ({ name, control, props }: FormColorPickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(renderProps) => (
        <MuiColorInput
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

export default FormColorPicker;
