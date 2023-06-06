export const CartPriceCounter = (cart) => {
  return cart?.reduce(
    (acc, { price, qty }) => ({
      total: price * qty + acc.total,
      totalProduct: qty + acc.totalProduct,
    }),
    { total: 0, totalProduct: 0 }
  );
};
