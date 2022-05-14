import React, { useState } from "react";
import imagen from "../sass/components/imageLogin.module.scss";
import card from "../sass/layout/login.module.scss";
import button from "../sass/components/button.module.scss";
import "../sass/abstract/variables.module.scss";

import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const navigate = useNavigate();
  const [values, handleInputChange] = useForm({
    user: "",
    password: "",
    valido: false,
  });
  const { user, password } = values;
  const handleDashboard = (e) => {
    if (user.length > 1 && password.length > 1) {
      sessionStorage.setItem('user',JSON.stringify({user,password}))
      navigate("/home");
      return;
    }
  };
  const handleSubmit = (e) => {
    console.log("Recibiendo la informacion");
  };

  return (
    <div className={`${imagen.imgLogin} ${imagen.center}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={card.card}>
          <div className={card.card__login_text}>Login</div>
          <div>
            <label htmlFor="userName">User</label>
            <input
              className={`${card.card__login}`}
              type="text"
              name="user"
              value={user}
              required={true}
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              className={`${card.card__login}`}
              type="password"
              name="password"
              required={true}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={(e) => handleDashboard(e)}
            type="submit"
            className={`${button.card__button}`}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
};
