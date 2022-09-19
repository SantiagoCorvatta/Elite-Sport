import { Badge } from 'react-bootstrap';
import { TiShoppingCart } from 'react-icons/ti';

const CartWidget = () => {
    return ( 
        <>
            <TiShoppingCart />
            <span className='span'>
                <h6>1</h6>              
            </span> 
        </>
        
     );
}
 
export default CartWidget;