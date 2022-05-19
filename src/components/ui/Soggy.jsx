import { useDispatch, useSelector } from "react-redux";

import "../../sass/components/Soggy.scss";
import { fetchAPIRickMorty } from "../../reducers/pagesReducer";

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
        <span className="soggy__current">
          {totalOfPages.map((number) => {
            return (
              <span
                onClick={(e) => handleGetNumber(e)}
                key={number}
                className={`soggy__current-${number} ${
                  +paginaSeleccionada === number ? "soggy__current-active" : ""
                }`}
              >
                {`${number}`}
              </span>
            );
          })}
        </span>
      </div>
    </>
  );
};
