import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

export const DataContext = ({ children }) => {
 const [products,setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const {products} = await res.json();
      setProducts(products);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <dataContext.Provider value={{products}}>{children}</dataContext.Provider>;
};
