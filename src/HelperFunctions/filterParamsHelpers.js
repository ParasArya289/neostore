export const updateCategoryParams = (event, dispatch) => {
  const { name, checked } = event.target;
  if (checked) {
    dispatch({ type: "UPDATE_CATEGORY_CHECKED", payload: name });
  } else {
    dispatch({ type: "UPDATE_CATEGORY_UNCHECKED", payload: name });
  }
};
export const updateSortParams = (event, dispatch) => {
  const { value } = event.target;
  dispatch({ type: "UPDATE_SORT", payload: value });
};
export const updateSearchParams = (e, dispatch) => {
  dispatch({ type: "UPDATE_SEARCH", payload: e.target.value });
};
export const updateRatingParams = (rating, dispatch) => {
  dispatch({ type: "UPDATE_RATING", payload: rating });
};
export const updateColorParams = (hex, dispatch) => {
  dispatch({ type: "UPDATE_COLOR", payload: hex });
};
export const updatePriceParams = (price, dispatch) => {
  dispatch({ type: "UPDATE_PRICE", payload: price });
};

export const clearRatingParams = (dispatch) => {
  dispatch({ type: "CLEAR_RATING" });
};
export const clearColorParams = (dispatch) => {
  dispatch({ type: "CLEAR_COLOR" });
};
export const clearPriceParams = (dispatch) => {
  dispatch({ type: "CLEAR_PRICE" });
};
export const clearSortParams = (dispatch) => {
  dispatch({ type: "CLEAR_SORT" });
};
export const clearCategoryParams = (dispatch) => {
  dispatch({ type: "CLEAR_CATEGORY" });
};
export const clearAllParams = (dispatch) => {
  dispatch({ type: "CLEAR_ALL" });
};
