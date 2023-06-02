import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as SC from "./ProductsStyled";

import { fetchProducts } from "../../Utilities/helpers";
import ProductsItem from "./ProductsItem";
import productsCartContext from "../../context/productsCartContext";

const ProductsList = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([])
  const [error, setError] = useState(null);
  const { productsCart, add,formChosenProducts, clear, remove } =
    useContext(productsCartContext);
  
  const generateRandomPrice = () => {
    const min = 1;
    const max = 100;

    const randomPrice = (Math.random() * (max - min) + min).toFixed(2);

    return randomPrice;
  };
  

  

  useEffect(() => {
    fetchProducts(name)
      .then(setProducts)
      .catch((error) => setError(error));
  }, [name]);

  useEffect(() => {
    clear()
   const productsWithPrice =
     products && products.length > 0
       ? products.map((el) => (el = { ...el, price: generateRandomPrice() }))
       : null;
    
    setProductsList(productsWithPrice);
    formChosenProducts(productsWithPrice);
}, [clear, formChosenProducts, products])

  const formedProducts = productsList
    ? productsList.filter(({ idMeal }) => productsCart.includes(idMeal))
    : null;

  const handleAddProduct = (id) => {
    add(id);
     console.log(id);
    
  };

  const handleRemoveProduct = (id) => {

    remove(id);
  }

  const handleFormProducts = formedProducts => {
    formChosenProducts(formedProducts);
  }




  return (
    <SC.ProductsList>
      {error && <h1>{error.message}</h1>}
      {!!productsList &&
        productsList.length > 0 &&
        productsList.map(({ idMeal, strMealThumb, strMeal, price }) => (
          <ProductsItem
            productsList={formedProducts}
            key={idMeal}
            name={strMeal}
            image={strMealThumb}
            id={idMeal}
            addProduct={handleAddProduct}
            removeProduct={handleRemoveProduct}
            formProductList={handleFormProducts}
            price={price}
          />
        ))}
    </SC.ProductsList>
  );
};

export default ProductsList;
