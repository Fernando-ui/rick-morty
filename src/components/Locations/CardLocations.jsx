import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchGet } from "../../helpers/postFetch";
import card from "../../sass/layout/card.module.scss";
import { Soggy } from "../ui/Soggy";

export const CardLocations = ({ move }) => {
  const {
    locationsPage: { pageOfLocations: page },
  } = useSelector((state) => state);
  const [totalOfPages, setTotalOfPages] = useState(0);
  const [locations, setLocations] = useState([]);

  // const slidderMove = {
  //     transition: "transform .5s ease",
  //     transform: `translateX(${move}rem)`,
  //   };

  useEffect(() => {
    getLocations();
  }, [page]);
  const getLocations = async () => {
    const { results, info } = await fetchGet(
      `https://rickandmortyapi.com/api/location?page=${+page}`
    );
    setLocations(results);
    setTotalOfPages(info.pages);
  };

  return (
    <>
      <div className={` ${card.card__container}`}>
        <div className={`${card.card__container__slider}`}>
          {locations.map(({ created, dimension, id, name, type }) => {
            return (
              <div key={id} className={`${card.card}`}>
                <div className={card.card__characters}>
                  <div className={card.card__name}>{name}</div>
                  <div>
                    <span className={`${card.card__description}`}>name:</span>
                    {name}
                  </div>
                  <div className={card.card__created}>
                    <span className={`${card.card__description}`}>
                      created:
                    </span>
                    {created}
                  </div>
                  <div className={card.card__date}>
                    <span className={`${card.card__description}`}>
                      dimension:
                    </span>
                    {dimension}
                  </div>
                  <div className={card.card__date}>
                    <span className={`${card.card__description}`}>type:</span>
                    {type}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Soggy numberOfPages={totalOfPages} typeOfSection="Locations" />
      </div>
    </>
  );
};
