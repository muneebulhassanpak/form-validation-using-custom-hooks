import React from "react";
import styles from "./App.module.css";
import Form from "./components/Form";

const App = () => {
  return (
    <main className={styles["app"]}>
      <Form />
    </main>
  );
};

export default App;
