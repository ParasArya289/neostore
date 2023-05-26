/**
 * Filter Products on the basis of url params
 * @type {function} filterProductsOnParams()
 * @param {object} initState , gives state of all applied filters.
 * @param {array} products
 */

export const filterProductsOnParams = (state, array) => {
let tempArray = array;
  const { category:catg, sort, rating:rat, color:clr, price:prc } = state;
  console.log({state, array})
  if(catg.length){
    tempArray = tempArray.filter(({category})=>catg.includes(category))
  }
  if(sort.length){
    tempArray= tempArray.sort((a,b)=>sort[0]==='LTH'?a.price-b.price:b.price-a.price)
  }
  if(rat.length){
    tempArray = tempArray.filter(({rating})=>rating<=rat[0])
  }
  if(clr.length){
    tempArray = tempArray.filter(({color})=>color === clr[0]);
  }
  if(prc.length){
    tempArray = tempArray.filter(({price})=>price <= prc[0]);
  }
  return tempArray;
};
