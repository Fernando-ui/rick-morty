import {useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchGet } from "../../helpers/postFetch";
import { Soggy } from "../ui/Soggy";
import card from "../../sass/layout/card.module.scss";

export const CardEpisodes = ({ move }) => {
  const {page:{page}} = useSelector(state => state);
  const [episodes, setEpisodes] = useState([]);

  const slidderMove = {
    transition:'transform .5s ease',
    transform:`translateX(${move}rem)`,
  };
  
  useEffect(() => {
    getEpisodes();
  }, [page]);
  
  const getEpisodes = async () => {
    const { results } = await fetchGet(
      `https://rickandmortyapi.com/api/location/?page=${+page}`
    );
    setEpisodes(results);
  };

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div style={slidderMove} className={`${card.card__container__slider}`}>
          {episodes.map(({ name, created, air_date, id }) => {
            return (
              <div key={id} className={`${card.card}`}>
                <div className={card.card__characters}>
                  <div className={card.card__name}>{name}</div>
                  <div className={card.card__created}>created: {created}</div>
                  <div className={card.card__date}>air date: {air_date}</div>
                  <Link to="home/character/:character">
                    <div className={card.card__characters_text}>characters</div>
                  </Link>
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
