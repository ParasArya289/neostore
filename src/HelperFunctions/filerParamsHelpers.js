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
export const updateRatingParams = (dispatch) => {
  dispatch({ type: "UPDATE_RATING", payload: "" });
};
export const updateColorParams = (dispatch) => {
  dispatch({ type: "UPDATE_COLOR", payload: "" });
};

export const clearRatingParams = (dispatch) => {
  dispatch({ type: "CLEAR_RATING" });
};
export const clearColorParams = (dispatch) => {
  dispatch({ type: "CLEAR_COLOR" });
};
export const clearSortParams = (dispatch) => {
  dispatch({ type: "CLEAR_SORT" });
};
export const clearCategoryParams = (dispatch) => {
  dispatch({ type: "CLEAR_CATEGORY" });
};
