import { RegisterForm } from "@/components/auth/register-form";
import { SltyLogo } from "@/components/slty-logo";

const RegisterPage = () => {
  return (
    <div className="flex flex-col">
      <SltyLogo style={1} dir="col" showText={false} className="pt-4 pb-12" iconSize={80} />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;