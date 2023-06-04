const defaultAddress = {
  id: 1,
  name: "Paras Arya",
  locality: "GM-289/Sector-G/DD Nagar",
  city: "Gwalior",
  state: "Madhya Pradesh",
  country: "India",
  pincode: "474005",
  mobile: "123456789",
};

export const initDataState = {
  products: [],
  categories: [],
  wishlist: [],
  featured: [],
  cart: [],
  wishlist: [],
  address: [defaultAddress],
  isCartLoading: false,
  isWishlistLoading: false,
  isProductsLoading: false,
  isCategoriesLoading: false,
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "INIT_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "INIT_FEATURED":
      return {
        ...state,
        featured: action.payload,
      };
    case "INIT_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "INIT_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "INIT_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload),
      };
    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id
            ? {
                ...prod,
                qty: action.payload.qty,
              }
            : prod
        ),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          state.cart.find(({ id }) => id === action.payload),
        ],
        cart: state.cart.filter(({ id }) => id !== action.payload),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(({ id }) => id !== action.payload),
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart.find(({ id }) => id === action.payload),
        ],
        wishlist: state.wishlist.filter(({ id }) => id !== action.payload),
      };
  }
};
