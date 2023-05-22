import {motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { BasicExample, ProductCard, ProductsCard } from '../../components/ProductsCard/ProductsCard';
import { dataContext } from '../../contexts/dataContext';
import './Products.css'
// id,name,price,rating,colors,image,description,category
export const Products = () => {
  const {products} = useContext(dataContext)
  console.log(products)
  return (
    <>
    {/* <nav className='prod-nav'>
    </nav> */}
    <AnimatePresence>
    <motion.div layout className="products-container">
   { products.map((product) =>  (
      <ProductsCard key={product.name} productData={product}/>
    ))}
    </motion.div>
    </AnimatePresence>
    </>
  );
};
