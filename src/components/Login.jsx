import React from "react";
import imagen from "../sass/components/imageLogin.module.scss";
import card from "../sass/layout/login.module.scss";
import "../sass/abstract/variables.module.scss";

export const Login = () => {
  return (
    //TODO  hacer un login con opacity de animacion que se vea y desaparezca
    <div className={`${imagen.imgLogin} ${imagen.center}`}>
      <form action="#">
        <div className={card.card}>
          <div className={card.card__login_text}>Login</div>
          <div>
            <label htmlFor="userName">User</label>
            <input
              className={`${card.card__login}`}
              type="text"
              name="user"
              id="userName"
              required={true}
              autocomplete="off"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={`${card.card__login}`}
              type="password"
              name="user"
              id="password"
              required={true}
            />
          </div>
          <button type="submit" className={card.card__button}>
            login
          </button>
        </div>
      </form>
    </div>
  );
};
