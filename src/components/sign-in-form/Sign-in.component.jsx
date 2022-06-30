import { useState, useContext } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserFromEmailandPassword,
} from "../../utils/firebase/Firebase.utils";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/users.context";

const defaultFieldsValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fieldsValue, setFieldsValue] = useState(defaultFieldsValue);
  const { email, password } = fieldsValue;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserFromEmailandPassword(
        email,
        password
      );
      setCurrentUser(user);
      setFieldsValue(defaultFieldsValue);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("User does not found. Please signup first to Login");
          break;
        default:
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-form-container">
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign-In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
