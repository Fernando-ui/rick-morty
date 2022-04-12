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
    console.log(e, "Tenemos el evento");

    // navigate('/dashboard');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleForm = (e) => {
    if(e.target.value > 0){
      console.log('Continuar');
      
    }else{
      console.log('Tenemos menor, no pasa');
      
    }
    
    
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
              onBlur={handleForm}
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
              onBlur={handleForm}
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
