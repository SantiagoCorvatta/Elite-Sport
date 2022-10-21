import Item from "../ItemList/Item"
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext)
    const[count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const increase = (value)=>{
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return ( 
        <div className="itemDetailContainer">
            <Item product={product} />
            {showItemCount && (
              <ItemCount initial={0} stock={5} onAdd={increase} />  
            )}
            {!showItemCount && (
                <Link to ='/cart'>
                  <Button variant="success">Ver carrito</Button>  
                </Link>
                
            )}
            
        </div>
     );
}
 
export default ItemDetail;