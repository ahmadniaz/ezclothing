import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserFromEmailandPassword,
} from "../../utils/firebase/Firebase.utils";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const formFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fieldsValue, setFieldsValue] = useState(formFields);
  const { email, password } = fieldsValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserFromEmailandPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {}
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
          <Button buttonType="google" onClick={signInWithGoogle}>
            signInWithGoogle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
