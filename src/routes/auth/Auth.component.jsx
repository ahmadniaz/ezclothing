import { useEffect } from "react";
import SignupForm from "../../components/sign-up-form/Sign-up.component";
import SignInForm from "../../components/sign-in-form/Sign-in.component";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

const Auth = () => {
  useEffect(() => {
    const redirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    redirectResult();
  }, []);

  return (
    <div>
      <h2>SIGN IN HERE </h2>
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Auth;
