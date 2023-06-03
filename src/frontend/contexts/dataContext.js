import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fetchCategories, fetchProducts } from "../../HelperFunctions/dataHelpers";
import { dataReducer, initDataState } from "../Reducers/dataReducer";

export const dataContext = createContext();

export const DataContext = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initDataState);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // const fetchProducts = async () => {
  //   try {
  //     const res = await fetch("/api/products");
  //     const { products } = await res.json();
  //     setProducts(products);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };
  // const fetchCategories = async () => {
  //   try {
  //     const res = await fetch("/api/categories");
  //     const { categories } = await res.json();
  //     setCategories(categories);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  //   fetchCategories();
  // }, []);

  useEffect(() => {
    fetchProducts(dataDispatch);
    fetchCategories(dataDispatch)
  }, []);

  return (
    <dataContext.Provider value={{ products, categories,dataState,dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
