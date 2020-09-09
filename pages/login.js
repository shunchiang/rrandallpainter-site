import style from "../sass/Login.module.scss";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const onInputChange = (event) => {
    const newFormData = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    setFormState(newFormData);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("localhost:3080/login", formState)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.res));
    console.log(formState);
  };
  return (
    <>
      <div className={style.loginContainer}>
        <div className={style.loginBox}>
          <p>Login</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="username"
              value={formState.username}
              placeholder="username"
              onChange={onInputChange}
            />
            <input
              type="text"
              name="password"
              value={formState.password}
              placeholder="password"
              onChange={onInputChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
