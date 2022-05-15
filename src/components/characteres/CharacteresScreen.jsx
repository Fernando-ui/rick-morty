import { useState } from "react";
import { useDispatch } from "react-redux";

import HomeLayout from "../../sass/layout/Inicio.module.scss";
import "../../sass/components/arrowButton.scss";
import { ACTIONS } from "../../actions/Actions";

export const Characteres = () => {
  const [move, setMove] = useState(0);
  const dispatch = useDispatch();
  const handleMove = (e) => {
    const clase = e.target.classList[0];

    if (clase === "container__button-left") {
      if (move >= -1.42) {
        return;
      }
      setMove(move + 25);
    } else {
      if (move <= -25 * 20) {
        dispatch({ type: ACTIONS.ADDPAGE });
        setMove(0);
        return;
      }
      setMove(move - 25);
    }
  };

  return (
    <>
      <div
        className={`${HomeLayout.container__locations} ${HomeLayout.container__episodes}`}
      >
        <div className={`${HomeLayout.container__flex}`}>
          <div className={`${HomeLayout.container__flex__title}`}>
            Characteres
            <hr />
          </div>
          <div className="container__arrow container__arrow-left">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Before</title>
              <path
                className="container__button-left"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
          //TODO  Componente de las cards  Episodes
          <div className="container__arrow container__arrow-right">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Next</title>
              <path
                className="container__button-right"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
