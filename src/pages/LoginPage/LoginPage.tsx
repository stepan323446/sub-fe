import { AuthGuard } from "@entities/User";
import { LoginForm } from "@features";
import { useSeoHeader } from "@shared/hooks";
import { CenterTextTitle } from "@shared/ui";

const LoginPage = () => {
  useSeoHeader({
    title: "Login",
    description: "",
  });

  return (
    <AuthGuard authType="Guest">
      <CenterTextTitle>Login</CenterTextTitle>
      <LoginForm />
    </AuthGuard>
  );
};

export default LoginPage;
