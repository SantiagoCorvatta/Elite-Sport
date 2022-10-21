import "./CartWidget.css"
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
   const {totalQuantity} = useContext(CartContext)
    return (
      <>
       <Link to='/cart'>
           <TiShoppingCart />                       
        </Link>
        {totalQuantity  > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
        )}        
      </> 
       
        
     );
}
 
export default CartWidget;