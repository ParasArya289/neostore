import { createContext, useContext, useEffect, useReducer } from "react";
import {
  filterParamReducer,
  initParamState,
} from "../Reducers/filterParamsReducer";
import { useSearchParams } from "react-router-dom";
export const filterContext = createContext();

export const FilterParamsContextProvider = ({ children }) => {
  const [paramState, dispatchParams] = useReducer(
    filterParamReducer,
    initParamState
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatchParams({
      type: "INIT_FILTER",
      payload: {
        search: searchParams.get("search") || [],
        category: searchParams.getAll("category"),
        sort: searchParams.get("sort") || [],
        rating: searchParams.get("rating") || [],
        color: searchParams.get("color") || [],
        price: searchParams.get("price") || [],
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

export const useFilterParams = () => useContext(filterContext);
