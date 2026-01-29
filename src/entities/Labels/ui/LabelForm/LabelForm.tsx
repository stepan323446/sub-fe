import { useForm } from "react-hook-form";
import * as v from "valibot";
import type { Label, LabelRequest } from "../../model/types";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Form,
  FormTextInput,
  Label as CustomLabel,
  FormColorPicker,
} from "@/shared/ui";
import { StyledInputContainer } from "./LabelForm.styles";
import type { ReactNode } from "react";

interface FormValues {
  name: string;
  colorHex: string;
}
interface LabelFormProps {
  label?: Label | LabelRequest;
  onLabelSubmit: (label: LabelRequest) => void;
  children?: ReactNode;
}
const LabelSchemeResolver = v.object({
  name: v.pipe(v.string()),
  colorHex: v.pipe(v.string(), v.hexColor()),
});

const LabelForm = ({ label, onLabelSubmit, children }: LabelFormProps) => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: valibotResolver(LabelSchemeResolver),
    defaultValues: {
      ...label,
    },
  });

  const onSubmit = (data: FormValues) => {
    onLabelSubmit({ ...data });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <CustomLabel label="Name" htmlFor="name" required={true}>
          <FormTextInput
            name="name"
            control={control}
            props={{
              placeholder: "IT",
              size: "small",
              required: true,
            }}
          />
        </CustomLabel>

        <CustomLabel label="Color" htmlFor="colorHex" required={true}>
          <FormColorPicker
            name="colorHex"
            control={control}
            props={{
              format: "hex",
            }}
          />
        </CustomLabel>
      </StyledInputContainer>
      {children}
    </Form>
  );
};

export default LabelForm;
