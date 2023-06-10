import { createContext, useContext, useEffect, useReducer } from "react";
import { fitlerReducer, initFilterState } from "../reducer/filterReducer";
import { useSearchParams } from "react-router-dom";
export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [paramState, dispatchParams] = useReducer(
    fitlerReducer,
    initFilterState
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatchParams({
      type: "INIT_FILTER",
      payload: {
        search: searchParams.getAll("search"),
        category: searchParams.getAll("category"),
        sort: searchParams.getAll("sort"),
        rating: searchParams.getAll("rating"),
        color: searchParams.getAll("color"),
        price: searchParams.get("price")
          ? searchParams.getAll("price")
          : "150000",
      },
    });
  }, []);

  useEffect(() => {
    setSearchParams(paramState);
  }, [paramState]);

  return (
    <filterContext.Provider value={{ paramState, dispatchParams }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
