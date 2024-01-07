import styles from "./Login.module.css";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle user log in to database
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("User Logged In");
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };

  return (
    <section className={`${"wrapper"} ${styles.loginPage}`}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            id="email"
            placeholder="E-mail Address"
          ></input>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            id="password"
            placeholder="Password"
          ></input>
          <button className={styles.btn} type="submit">
            Log in
          </button>
          <p>
            Don&#39;t have an account?<span>Sign up</span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
