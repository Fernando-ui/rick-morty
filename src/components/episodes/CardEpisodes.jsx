import { useEffect, useState } from "react";
import { fetchGet } from "../../helpers/postFetch";
import { Link } from "react-router-dom";
import card from "../../sass/layout/card.module.scss";

export const CardEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    getEpisodes();
  }, []);

  const getEpisodes = async () => {
    const { results } = await fetchGet(
      `https://rickandmortyapi.com/api/episode`
    );
    setEpisodes(results);
  };

  console.log(episodes);

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div className={`${card.card__container__slider}`}>
          {episodes.map(({ name, created, air_date, id }) => {
            return (
              <div key={id} className={`${card.card}`}>
                <div className={card.card__characters}>
                  <div className={card.card__name}>{name}</div>
                  <div className={card.card__created}>created: {created}</div>
                  <div className={card.card__date}>air date: {air_date}</div>
                  <Link to="home/character">
                    <div className={card.card__characters_text}>characters</div>
                  </Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
