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

  /**
   * on hard refresh if params are available, then set those params
   * @searchParams is present in url, then get all of the params,
   * @getAll returns array of params, if no params available then empty array is returned which is interpreted by useSearchParam as "not present".
   */

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
