import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchGet } from "../../helpers/postFetch";
import card from "../../sass/layout/card.module.scss";
import { Soggy } from "../ui/Soggy";

export const CardCharacteres = ({ move }) => {
  const {characteresPage:{pageOfCharacteres:page}} = useSelector((state) => state);
  const [characters, setCharacters] = useState([]);
  const [totalOfPages, settotalOfPages] = useState(0);

  const getCharacteres = async () => {
    const { results, info } = await fetchGet(
      `https://rickandmortyapi.com/api/character/?page=${+page}`
    );
    setCharacters(results);
    settotalOfPages(info.pages);
  };
  useEffect(() => {
    getCharacteres();
  }, [page]);
  const slidderMove = {
    transition: "transform .5s ease",
    transform: `translateX(${move}rem)`,
  };

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div style={slidderMove} className={`${card.card__container__slider}`}>
          {characters.map(
            ({
              created,
              gender,
              image,
              location,
              name,
              origin,
              species,
              status,
              id,
            }) => {
              return (
                <div key={id} className={`${card.card}`}>
                  <div className={card.card__characters}>
                    <div className={card.card__name}>{name}</div>
                    <div>
                      <span className={`${card.card__description}`}>
                        Gender:
                      </span>
                      {gender}
                    </div>
                    <div className={card.card__data}>
                      <span className={`${card.card__description}`}>
                        created:
                      </span>
                      {created}
                    </div>
                    <div className={card.card__data}>
                      <span className={`${card.card__description}`}>
                        location:
                      </span>
                      {location.name}
                    </div>
                    <div className={card.card__data}>
                      <span className={`${card.card__description}`}>
                        origin:
                      </span>
                      {origin.name}
                    </div>
                    <div className={card.card__data}>
                      <span className={`${card.card__description}`}>
                        species:
                      </span>
                      {species}
                    </div>
                    <div className={card.card__data}>
                      <span className={`${card.card__description}`}>
                        status:
                      </span>
                      {status}
                    </div>
                    <div className={`${card.card__container__data}`}>
                      <img
                        className={` ${card.card__image}`}
                        src={image}
                        alt={name}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <Soggy numberOfPages={totalOfPages} typeOfSection="Characteres" />
      </div>
    </>
  );
};
