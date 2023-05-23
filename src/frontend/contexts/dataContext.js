import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

export const DataContext = ({ children }) => {
 const [products,setProducts] = useState([]);
 const [categories,setCategories] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const {products} = await res.json();
      setProducts(products);
    } catch (e) {
      console.error(e.message);
    }
  };
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const {categories} = await res.json();
      setCategories(categories);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return <dataContext.Provider value={{products,categories}}>{children}</dataContext.Provider>;
};
