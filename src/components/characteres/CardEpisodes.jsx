import { useEffect, useState } from "react";
import { fetchGet } from "../../helpers/postFetch";
import card from "../../sass/layout/card.module.scss";

export const CardEpisodes = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacteres = async () => {
    const { results } = await fetchGet(
      `https://rickandmortyapi.com/api/character`
    );
    setCharacters(results);
  };
  useEffect(() => {
    getCharacteres();
  }, []);
  console.log(characters);

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div className={`${card.card__container__slider}`}>
          {characters.map(
            ({
              created,
              episode,
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
                    <div className={card.card__created}>
                      <span className={`${card.card__description}`}>
                        created:
                      </span>
                      {created}
                    </div>
                    <div className={card.card__date}>
                      <span className={`${card.card__description}`}>
                        location:
                      </span>
                      {location.name}
                    </div>
                    <div className={card.card__date}>
                      <span className={`${card.card__description}`}>
                        origin:
                      </span>
                      {origin.name}
                    </div>
                    <div className={card.card__date}>
                      <span className={`${card.card__description}`}>
                        species:
                      </span>
                      {species}
                    </div>
                    <div className={card.card__date}>
                      <span className={`${card.card__description}`}>
                        status:
                      </span>
                      {status}
                    </div>
                    <div className={card.card__date}>
                      <img src={image} alt="" />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
