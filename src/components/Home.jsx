import HomeLayout from "../sass/layout/Inicio.module.scss";
import { CardEpisodes } from "./episodes/CardEpisodes";
import "../sass/components/arrowButton.scss";

export const Home = () => {
  return (
    <>
      <div className={HomeLayout.container}>
        <div
          className={`${HomeLayout.container__locations} ${HomeLayout.container__episodes}`}
        >
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Episodes
              <hr />
            </div>
            <div className="container__arrow container__arrow-left">
              <svg
                class="container__button-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="angle-left-svg"
                aria-labelledby="angle-svg"
                aria-hidden="true"
                role="img"
              >
                <title id="angle-svg">Anterior</title>
                <path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path>
              </svg>
            </div>
            <CardEpisodes />
            <div className="container__arrow container__arrow-right">
              <svg
                class="container__button-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="angle-left-svg"
                aria-labelledby="angle-svg"
                aria-hidden="true"
                role="img"
              >
                <title id="angle-svg">Anterior</title>
                <path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Characteres
            </div>
            <div></div>
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Locations
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
//TODO  Revisar si las clases de estilos las coloco con `${} o con las clases normales`
