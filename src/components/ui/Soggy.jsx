import { useDispatch, useSelector } from "react-redux";

import "../../sass/components/Soggy.scss";
import { fetchAPIRickMorty } from "../../reducers/pagesReducer";
import arrow from "../../assets/left-arrow.svg";

//TODO  Hacer un switchCase para saber que dispatch hacer, tambien mandarle al elemento <soggy /> el tipo de card que lo tomara
//TODO Hacer un array de los elementos que lo tienen para evaluarlo en el switchCase
export const Soggy = ({ numberOfPages }) => {
  const totalOfPages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    totalOfPages.push(i);
  }

  const {
    page: { page: paginaSeleccionada },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleGetNumber = (e) => {
    const numberOfPage =
      e.target.classList[0][e.target.classList[0].length - 1];

    dispatch(fetchAPIRickMorty(numberOfPage));
    console.log("Dandole click");
  };

  return (
    <>
      <div className="soggy">
        <div className="soggy__buttonArrow soggy__left-arrow">
          <div className="soggy__buttonArrow__img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
            </svg>
          </div>
        </div>
        <div className="soggy__container">
          <span className="soggy__current">
            {totalOfPages.map((number) => {
              return (
                <span
                  onClick={(e) => handleGetNumber(e)}
                  key={number}
                  className={`soggy__current-${number} ${
                    +paginaSeleccionada === number
                      ? "soggy__current-active"
                      : ""
                  }`}
                >
                  {`${number}`}
                </span>
              );
            })}
          </span>
        </div>

        <div className="soggy__buttonArrow soggy__right-arrow">
          <div className="soggy__buttonArrow__img ">
            <svg className="soggy__buttonRight-rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
