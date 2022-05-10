import "../../sass/components/Soggy.scss";
import { useDispatch, useSelector } from "react-redux";

import { fetchAPIRickMorty } from "../../reducers/pagesReducer";

export const Soggy = () => {
  const {page:{page}} = useSelector( state => state);
  const dispatch = useDispatch();

  const handleGetNumber = (e) => {
    const numberOfPage =
      e.target.classList[0][e.target.classList[0].length - 1];
    console.log(numberOfPage,'Tenemos el numero de la pagina desde el clcki');
    
    dispatch(fetchAPIRickMorty(numberOfPage));
  };
  console.log(page,'Estamos en esta pagina');
  
  return (
    <>
      <div className="soggy">
        <span className="soggy__current">
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-1 ${
              page === '1' ? "soggy__current-active" : ""
            }`}
          >
            1
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-2 ${
              page === '2' ? "soggy__current-active" : ""
            }`}
          >
            2
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-3 ${
              page === '3' ? "soggy__current-active" : ""
            }`}
          >
            3
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-4 ${
              page === '4' ? "soggy__current-active" : ""
            }`}
          >
            4
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-5 ${
              page === '5' ? "soggy__current-active" : ""
            }`}
          >
            5
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-6 ${
              page === '6' ? "soggy__current-active" : ""
            }`}
          >
            6
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-7 ${
              page === '7' ? "soggy__current-active" : ""
            }`}
          >
            7
          </span>
        </span>
      </div>
    </>
  );
};
