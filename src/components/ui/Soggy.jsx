import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import "../../sass/components/Soggy.scss";
import { fetchAPIRickMorty } from "../../reducers/pagesReducer";
import { fetchAPICharacteres } from "../../reducers/CharacteresReducer";
import { fetchAPILocations } from "../../reducers/locationsReducer";

export const Soggy = ({ numberOfPages, typeOfSection }) => {
  const totalOfPages = [];
  const dispatch = useDispatch();

  const {
    characteresPage: { pageOfCharacteres },
    page: { page: selectedPage },
  } = useSelector((state) => state);
  
  for (let i = 1; i <= numberOfPages; i++) {
    totalOfPages.push(i);
  }

  const [moveSoggy, setMoveSoggy] = useState(0);
  const moveOfSoggy = {
    transition: "transform .5s ease",
    transform: `translateX(${moveSoggy}rem)`,
  };

  const handleGetNumber = (e) => {
    const numberOfPage = e.target.classList[0].split("-")[1];

    switch (typeOfSection) {
      case "Episodes":
        dispatch(fetchAPIRickMorty(numberOfPage));

        break;
      case "Characteres":
        dispatch(fetchAPICharacteres(numberOfPage));

      default:
      case "Locations":
        console.log('Entrando a locations');
        dispatch(fetchAPILocations(numberOfPage));
        break;
    }
  };
  const handleChangeLeftPage = () => {
    setMoveSoggy(moveSoggy + 9.3);
  };
  const handleChangeRightPage = () => {
    setMoveSoggy(moveSoggy - 9.3);
  };

  return (
    <>
      <div className="soggy">
        {totalOfPages.length <= 3 ? null : (
          <div
            className="soggy__buttonArrow soggy__left-arrow"
            onClick={(e) => handleChangeLeftPage(e)}
          >
            <div className="soggy__buttonArrow__img">
              <svg
                className="leftA"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
            </div>
          </div>
        )}
        <div className="soggy__container">
          <span className="soggy__current" style={moveOfSoggy}>
            {totalOfPages.map((number) => {
              return (
                <span
                  onClick={(e) => handleGetNumber(e)}
                  key={number}
                  className={`soggy__current-${number} ${
                    typeOfSection === "Episodes"
                      ? number === selectedPage
                        ? "soggy__current-active"
                        : ""
                      : typeOfSection === "Characteres"
                      ? number === pageOfCharacteres
                        ? "soggy__current-active"
                        : ""
                      : ""
                  }`}
                >
                  {`${number}`}
                </span>
              );
            })}
          </span>
        </div>
        {totalOfPages.length <= 3 ? null : (
          <div
            className="soggy__buttonArrow soggy__right-arrow"
            onClick={() => handleChangeRightPage()}
          >
            <div className="soggy__buttonArrow__img ">
              <svg
                className="soggy__buttonArrow-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
