import "./ItemListContainer.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../../utils/products";


const ItemListContainer = ({greeting}) => {
  const {categoryId} = useParams();
  const [products, setProducts] = useState([]);
    
    useEffect(()=>{
      if (categoryId) {
        getProductsByCategory(categoryId)
        .then((data)=> setProducts(data))
        .catch((error) => console.warn(error))
      }else {
        getAllProducts()
        .then((data)=> setProducts(data))
        .catch((error) => console.warn(error))
      }
    

          
    }, [categoryId])


    return ( 
       <>
        <h3 className="greeting">{greeting}</h3>       
        <ItemList products={products}/>
       </>
       
     );
}
 
export default ItemListContainer;