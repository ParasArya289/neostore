/**
 * Filter Products on the basis of url params
 * @type {function} filterProductsOnParams()
 * @param {object} initState , gives state of all applied filters.
 * @param {array} products
 */

export const filterProductsOnParams = (state, array) => {
  let tempArray = array;
  const {
    category: catg,
    sort,
    rating: rat,
    color: clr,
    price: prc,
    search,
  } = state;
  console.log({ state, array, search });
  if (catg.length) {
    tempArray = tempArray.filter(({ category }) => catg.includes(category));
  }
  if (sort.length) {
    tempArray = [...tempArray].sort((a, b) =>
      sort[0] === "LTH" ? a.price - b.price : b.price - a.price
    );
  }
  if (rat.length) {
    tempArray = tempArray.filter(({ rating }) => rating <= rat[0]);
  }
  if (clr.length) {
    tempArray = tempArray.filter(({ colors }) => colors.includes(clr[0]));
  }
  if (prc) {
    tempArray = tempArray.filter(({ price }) => price <= prc);
  }
  if (search.length) {
    tempArray = tempArray.filter(({ name }) =>
      name.toLowerCase().includes(search[0]?.toLowerCase())
    );
  }
  return tempArray;
};
