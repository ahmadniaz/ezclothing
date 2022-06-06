import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h2>SIGN IN HERE </h2>
      <button onClick={logGoogleUser}>Sign-in with google</button>
    </div>
  );
};

export default SignIn;
