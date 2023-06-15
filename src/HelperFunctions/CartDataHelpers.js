export const getCart = async (token, dataDispatch) => {
  try {
    const res = await fetch("/api/user/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Unable to get cart");
    }
    const { cart } = await res.json();
    dataDispatch({ type: "INIT_CART", payload: [...cart] });
    console.log(cart);
  } catch (e) {
    throw Error(e);
  }
};

export const addToCart = async (token, product, dataDispatch) => {
  try {
    const res = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { cart } = await res.json();
    dataDispatch({ type: "INIT_CART", payload: [...cart] });
    console.log(cart);
  } catch (e) {
    throw Error(e);
  }
};

export const removeFromCart = async (token, id, dataDispatch) => {
  try {
    const res = await fetch(`api/user/cart/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { cart } = await res.json();
    dataDispatch({ type: "INIT_CART", payload: cart });
    console.log(cart);
  } catch (e) {
    throw Error(e);
  }
};

export const updateCart = async (token, id, dataDispatch,type) => {
  try {
    const res = await fetch(`/api/user/cart/${id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ action: { type } }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { cart } = await res.json();
    dataDispatch({ type: "INIT_CART", payload: cart });
    console.log(cart);
  } catch (e) {
    throw Error(e);
  }
};

export const getWishlist = async (token, dataDispatch) => {
  try {
    const res = await fetch("/api/user/wishlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Unable to get wishlist");
    }
    const { wishlist } = await res.json();
    dataDispatch({ type: "INIT_WISHLIST", payload: [...wishlist] });
    console.log(wishlist);
  } catch (e) {
    throw Error(e);
  }
};

export const addToWishlist = async (token, product, dataDispatch) => {
  try {
    const res = await fetch("/api/user/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { wishlist } = await res.json();
    dataDispatch({ type: "INIT_WISHLIST", payload: wishlist });

    console.log(wishlist);
  } catch (e) {
    throw Error(e);
  }
};

export const removeFromWishlist = async (token, id, dataDispatch) => {
  try {
    const res = await fetch(`/api/user/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { wishlist } = await res.json();
    dataDispatch({ type: "INIT_WISHLIST", payload: wishlist });
    console.log(wishlist);
  } catch (e) {
    throw Error(e);
  }
};
