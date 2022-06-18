import { useState } from "react";

import {
  createAuthUserFromEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

const formFields = {
  dislayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [fieldsValue, setFieldsValue] = useState(formFields);
  const { displayName, email, password, confirmPassword } = fieldsValue;

  console.log(fieldsValue);
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
    <div>
      <form onSubmit={handleSubmit}>
        <lablel>Display Name</lablel>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <lablel>Email</lablel>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <lablel>Password</lablel>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <lablel>Confirm Password</lablel>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
      <button type="submit">Sign-Up</button>
    </div>
  );
};

export default SignupForm;
