import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  fetchCategories,
  fetchProducts,
} from "../../HelperFunctions/dataHelpers";
import { dataReducer, initDataState } from "../Reducers/dataReducer";

export const dataContext = createContext();

export const DataContext = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initDataState);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts(dataDispatch);
    fetchCategories(dataDispatch);
  }, []);

  return (
    <dataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
