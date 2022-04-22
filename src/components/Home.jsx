import HomeLayout from "../sass/layout/Inicio.module.scss";
import { CardEpisodes } from "./episodes/CardEpisodes";


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
            <div className='container__arrow'></div>
              <CardEpisodes />
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Characteres
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Locations
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//TODO  Revisar si las clases de estilos las coloco con `${} o con las clases normales`
