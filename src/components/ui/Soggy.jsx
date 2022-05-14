import { useDispatch, useSelector } from "react-redux";

import "../../sass/components/Soggy.scss";
import { fetchAPIRickMorty } from "../../reducers/pagesReducer";

export const Soggy = () => {
  const {page:{page}} = useSelector( state => state);
  const paginaSeleccionada = +page;
  const dispatch = useDispatch();

  const handleGetNumber = (e) => {
    const numberOfPage =
      e.target.classList[0][e.target.classList[0].length - 1];
    
    dispatch(fetchAPIRickMorty(numberOfPage));
  };
  
  return (
    <>
      <div className="soggy">
        <span className="soggy__current">
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-1 ${
              paginaSeleccionada === 1 ? "soggy__current-active" : ""
            }`}
          >
            1
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-2 ${
              paginaSeleccionada === 2 ? "soggy__current-active" : ""
            }`}
          >
            2
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-3 ${
              paginaSeleccionada === 3 ? "soggy__current-active" : ""
            }`}
          >
            3
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-4 ${
              paginaSeleccionada === 4 ? "soggy__current-active" : ""
            }`}
          >
            4
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-5 ${
              paginaSeleccionada === 5 ? "soggy__current-active" : ""
            }`}
          >
            5
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-6 ${
              paginaSeleccionada === 6 ? "soggy__current-active" : ""
            }`}
          >
            6
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-7 ${
              paginaSeleccionada === 7 ? "soggy__current-active" : ""
            }`}
          >
            7
          </span>
        </span>
      </div>
    </>
  );
};
