import { LoginForm } from "@/components/auth/login-form";
import { SltyLogo } from "@/components/slty-logo";

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <SltyLogo style={1} dir="col" showText={false} className="pt-4 pb-12 mx-auto" iconSize={80} />
      <LoginForm />
    </div>
  );
}

export default LoginPage;