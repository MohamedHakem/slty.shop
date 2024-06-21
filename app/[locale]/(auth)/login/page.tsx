import { LoginForm } from "@/components/auth/login-form";
import { SltyLogo } from "@/components/slty-logo";

const LoginPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <div className="flex flex-col">
      <SltyLogo
        style={1}
        dir="col"
        showText={false}
        className="mx-auto pb-12 pt-4"
        iconSize={80}
      />
      <LoginForm locale={locale} />
    </div>
  );
};

export default LoginPage;
