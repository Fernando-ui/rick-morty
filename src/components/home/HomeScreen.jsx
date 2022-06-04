import HomeLayout from "../../sass/layout/Inicio.module.scss";
import "../../sass/components/arrowButton.scss";
import { Episodes } from "../episodes/EpisodesScreen";
import { Characteres } from "../characteres/CharacteresScreen";
import { Locations } from "../Locations/LocationsScreen";

export const Home = () => {
  return (
    <>
      <div className={HomeLayout.container}>
        <Episodes />
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              <Characteres />
            </div>
           
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              <Locations />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
