import { useState, useEffect } from "react";
const useInput = (validationFunction) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
    setTouched(false);
  };

  const touchChangeHandler = () => {
    setTouched(true);
  };

  const isValid = validationFunction(value);

  return {
    value,
    touched,
    touchChangeHandler,
    isValid,
    valueChangeHandler,
  };
};

export default useInput;
