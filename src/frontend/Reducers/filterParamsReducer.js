export const initFilterState = {
  search: [],
  category: [],
  sort: [],
  rating:[],
  color:[],
  price:"150000",
  
};
export const fitlerReducer = (state, action) => {
  switch (action.type) {
    case "INIT_FILTER":
      return action.payload;

    case "UPDATE_CATEGORY_CHECKED":
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "UPDATE_CATEGORY_UNCHECKED":
      return {
        ...state,
        category: state.category.filter((c) => c !== action.payload),
      };

    case "CLEAR_CATEGORY":
      return {
        ...state,
        category: [],
      };

    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "CLEAR_SORT":
      return {
        ...state,
        sort: [],
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.payload ? action.payload : [],
      };
    case "UPDATE_RATING":
    return{
        ...state,
        rating:action.payload
    }
    case "CLEAR_RATING":
    return{
      ...state,
      rating:[]
    }
    case "UPDATE_COLOR":
    return{
        ...state,
        color:action.payload
    }
    case "CLEAR_COLOR":
    return{
      ...state,
      color:[]
    }
    default:
      return state;
  }
};
