import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthSocialButton, Form, FormTextInput, Link } from "@shared/ui";
import { useForm } from "react-hook-form";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  StyledAuthButtons,
  StyledSignUpText,
  StyledStack,
} from "./LoginForm.styles";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@mui/material";

import * as v from "valibot";
import { useAuthContext } from "@entities/User";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}

const LoginSchemeResolver = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

const LoginForm = () => {
  const { login } = useAuthContext();
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: valibotResolver(LoginSchemeResolver),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    login(data.email, data.password);
  };
  const onGoogle = () => {
    toast.success("Test successful");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledStack spacing={2}>
        <FormTextInput
          name="email"
          control={control}
          props={{
            placeholder: "E-mail",
            icon: <FontAwesomeIcon icon={faEnvelope} />,
          }}
        />
        <FormTextInput
          name="password"
          control={control}
          props={{
            type: "password",
            placeholder: "Password",
            icon: <FontAwesomeIcon icon={faKey} />,
          }}
        />
      </StyledStack>
      <Link sx={{ marginBottom: 2 }} to="/forgot-password">
        Forgot password?
      </Link>

      <StyledAuthButtons>
        <AuthSocialButton size="medium" authType="google" onClick={onGoogle}>
          Google
        </AuthSocialButton>
        <Button type="submit">Login</Button>
      </StyledAuthButtons>

      <StyledSignUpText>
        Don't have an accout? <Link to="/register">Sign up</Link>
      </StyledSignUpText>
    </Form>
  );
};

export default LoginForm;
