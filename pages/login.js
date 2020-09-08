import style from "../sass/Login.module.scss";

export default function Login() {
  return (
    <>
      <div className={style.loginContainer}>
        <div className={style.loginBox}>
          <p>Login</p>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
