import SignupForm from "../../components/sign-up-form/Sign-up.component";
import SignInForm from "../../components/sign-in-form/Sign-in.component";

import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Auth;
