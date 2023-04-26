import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const { reset, register, handleSubmit } = useForm();

  const [isLogged, setIsLogged] = useState(false);

  const submit = (data) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/users/login`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));

    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIsLogged(condition);
  }, []);

  console.log(isLogged);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div className="login">
        <div className="logout-container">
          <div className="boxicon__user">
            <i className="fa-regular fa-circle-user"></i>
          </div>
          <h1 className="logout-title">User Logged</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login__title">
          Welcome! Enter your email and password to continue
        </h2>
        <div className="login__test">
          <div className="login__test-titleContainer">
            <h4 className="login__test-title">Test data</h4>
          </div>
          <ul className="login__test-info">
            <li>
              <i className="bx bx-envelope"></i>
              <span className="login__test-info-title">datatest@gmail.com</span>
            </li>
            <li>
              <i className="bx bx-lock-alt"></i>
              <span className="login__test-info-title">data123</span>
            </li>
          </ul>
        </div>
        <form className="login__form" onClick={handleSubmit(submit)}>
          <div className="login__form-email">
            <label className="login__form-email-label" htmlFor="email">
              Email
            </label>
            <input
              className="login__form-email-input"
              type="text"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="login__form-password">
            <label className="login__form-password-label" htmlFor="password">
              Password
            </label>
            <input
              className="login__form-password-input"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <button className="login__form-btn">
            <span className="login__form-btn-title">Login</span>
          </button>
        </form>
        <h4 className="login__register">
          Don't have an account?{" "}
          <span className="login__register-span">Sign up</span>
        </h4>
      </div>
    </div>
  );
};

export default Login;
