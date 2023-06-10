/**
 * Filter Products on the basis of url params
 * @type {function} filterProductsOnParams()
 * @param {object} state , gives state of all applied filters.
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

  if (catg.length) {
    tempArray = tempArray.filter(({ category }) => catg.includes(category));
  }
  if (!Array.isArray(sort)) {
    tempArray = [...tempArray].sort((a, b) =>
      sort === "LTH" ? a.price - b.price : b.price - a.price
    );
  }
  if (!Array.isArray(rat)) {
    tempArray = tempArray.filter(({ rating }) => rating <= +rat);
  }

  if (!Array.isArray(clr)) {
    tempArray = tempArray.filter(({ colors }) => colors.includes(clr));
  }
  if (prc) {
    tempArray = tempArray.filter(({ price }) => price <= prc);
  }
  if (!Array.isArray(search)) {
    tempArray = tempArray.filter(({ name }) =>
      name.toLowerCase().includes(search?.toLowerCase())
    );
  }
  return tempArray;
};
