export const fetchProducts = async (dataDispatch) => {
  try {
    const res = await fetch("/api/products");
    const { products } = await res.json();
    dataDispatch({ type: "INIT_PRODUCTS", payload: products });
  } catch (e) {
    console.error(e.message);
  }
};
export const fetchCategories = async (dataDispatch) => {
  try {
    const res = await fetch("/api/categories");
    const { categories } = await res.json();
    dataDispatch({ type: "INIT_CATEGORIES", payload: categories });
  } catch (e) {
    console.error(e.message);
  }
};
