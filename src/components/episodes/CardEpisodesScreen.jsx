import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchGet } from "../../helpers/postFetch";
import { Soggy } from "../ui/Soggy";
import card from "../../sass/layout/card.module.scss";

export const CardEpisodes = ({ move }) => {
  const {
    page: { page },
  } = useSelector((state) => state);
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes, "Tenemos los episodes");

  const slidderMove = {
    transition: "transform .5s ease",
    transform: `translateX(${move}rem)`,
  };

  useEffect(() => {
    getEpisodes();
  }, [page]);

  const getEpisodes = async () => {
    const { results } = await fetchGet(
      `https://rickandmortyapi.com/api/episode/?page=${+page}`
    );
    setEpisodes(results);
  };

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div style={slidderMove} className={`${card.card__container__slider}`}>
          {episodes.map(({ name, created, air_date, id, episode }) => {
            console.log(name, created, air_date, id, episode);
            
            return (
              <div key={id} className={`${card.card}`}>
                <div className={card.card__characters}>
                  <div className={card.card__name}>{name}</div>
                  <div>
                    <span className={`${card.card__description}`}>
                      Episode: 
                    </span>
                    {episode}
                  </div>
                  <div className={card.card__created}>
                    <span className={`${card.card__description}`}>
                      created:
                    </span>
                    {created}
                  </div>
                  <div className={card.card__date}>
                    <span className={`${card.card__description}`}>
                      air date:
                    </span>
                    {air_date}
                  </div>
                  <div>
                    <span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Soggy />
      </div>
    </>
  );
};
