import React from "react";
import styles from "./Form.module.css";

import useInput from "../hooks/use-input";

const Form = () => {
  //Email validation function
  const emailValidationFunction = (userInput) => {
    return userInput.trim().length != 0 && userInput.trim().includes("@");
  };

  //Password validation function
  const passValidationFunction = (userInput) => {
    return userInput.trim().length != 0;
  };

  const {
    value: email,
    isValid: emailIsValid,
    touched: emailIsTouched,
    touchChangeHandler: emailTouchHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(emailValidationFunction);

  const {
    value: pass,
    isValid: passIsValid,
    touched: passIsTouched,
    touchChangeHandler: passTouchHandler,
    valueChangeHandler: passChangeHandler,
  } = useInput(passValidationFunction);

  const formIsValid = emailIsValid && passIsValid;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles["form"]} onSubmit={formSubmissionHandler}>
      <h1 className={styles["form-heading"]}>Signin to weebly</h1>
      <div className={styles["form-element"]}>
        <label htmlFor="email" className={styles["form-element__label"]}>
          Email goes here
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          className={
            emailIsTouched && !emailIsValid
              ? `${styles["form-element__field"]} ${styles["error"]}`
              : styles["form-element__field"]
          }
          placeholder={
            emailIsTouched && !emailIsValid ? "Email is required" : ""
          }
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailTouchHandler}
        />
      </div>
      <div className={styles["form-element"]}>
        <label htmlFor="email" className={styles["form-element__label"]}>
          Password goes here
        </label>
        <br />
        <input
          value={pass}
          type="password"
          name="password"
          id="password"
          placeholder={
            passIsTouched && !passIsValid ? "Password is required" : ""
          }
          onChange={passChangeHandler}
          className={
            passIsTouched && !passIsValid
              ? `${styles["form-element__field"]} ${styles["error"]}`
              : styles["form-element__field"]
          }
          onBlur={passTouchHandler}
        />

        <div className={styles["form-controls"]}>
          <input
            type="submit"
            value="Login"
            className={
              formIsValid
                ? styles["form-element__button"]
                : `${styles["form-element__button"]} ${styles["disabled"]}`
            }
            disabled={formIsValid}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
