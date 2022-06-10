import { useEffect } from "react";
import SignupForm from "../../components/signup-forn/Signup.component";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const redirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    };
    redirectResult();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h2>SIGN IN HERE </h2>
      <button onClick={logGoogleUser}>Sign-in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign-in with google Redirect
      </button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
