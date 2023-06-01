export const addToCart = async (token, product) => {
  try {
    const res = await fetch("api/user/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    const { cart } = await res.json();
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    console.log(cart);
  } catch (e) {
    throw Error(e)
  }
};

export const removeFromCart = async (token, id) => {
    try {
      const res = await fetch(`api/user/cart/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        }
      });
      const { cart } = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      console.log(cart);
    } catch (e) {
        throw Error(e)
    }
  };
  
  export const addToWishlist = async (token, product) => {
    try {
      const res = await fetch("api/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      const { wishlist } = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      console.log(wishlist);
    } catch (e) {
      throw Error(e)
    }
  };

  export const removeFromWishlist = async (token, id) => {
    try {
      const res = await fetch(`api/user/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        }
      });
      const { wishlist } = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      console.log(wishlist);
    } catch (e) {
        throw Error(e)
    }
  };
  