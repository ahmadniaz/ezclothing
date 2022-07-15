import SignupForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";

import { AuthenticationContainer } from "./auth.styles";

const Auth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignupForm />
    </AuthenticationContainer>
  );
};

export default Auth;
