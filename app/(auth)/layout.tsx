import { PropsWithChildren } from "react";
import Logo from "../../components/Logo";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default AuthLayout;
