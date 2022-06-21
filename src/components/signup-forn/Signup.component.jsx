import { useState } from "react";

import {
  createAuthUserFromEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

import "./signup-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const formFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [fieldsValue, setFieldsValue] = useState(formFields);
  const { displayName, email, password, confirmPassword } = fieldsValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords does not match");
      return;
    }

    try {
      const { user } = await createAuthUserFromEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log("unable to create user", error);
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Don't have an account yet?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
      <Button type="submit">Sign-Up</Button>
    </div>
  );
};

export default SignupForm;
