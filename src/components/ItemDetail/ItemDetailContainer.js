import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {id} = useParams();

    useEffect(()=>{
        console.log(id);
        getProduct(id)
            .then((data)=>{
                setProduct(data)
            })
            .catch(error=>console.warm(error))
    }, [id])
    
    return ( 
        <>
            
            {product && <ItemDetail product={product} />}
        </>
        
     );
}
 
export default ItemDetailContainer;