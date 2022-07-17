import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserFromEmailandPassword,
} from "../../utils/firebase/Firebase.utils";

import {
  SigninContainer,
  SigninHeading,
  ButtonContainer,
} from "./sign-in-form.styles";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFieldsValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fieldsValue, setFieldsValue] = useState(defaultFieldsValue);
  const { email, password } = fieldsValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserFromEmailandPassword(
        email,
        password
      );
      console.log(user);

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
    await signInWithGooglePopup();
  };

  return (
    <SigninContainer>
      <SigninHeading>Already have an account?</SigninHeading>
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
        <ButtonContainer>
          <Button type="submit">Sign-In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SigninContainer>
  );
};

export default SignInForm;
