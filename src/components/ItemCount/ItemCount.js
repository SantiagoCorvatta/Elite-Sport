import "./ItemCount.css";
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])
    
    return ( 
        <div className="counter">
            <div className="buttons">
                <Button variant="danger" disabled={count <= 1} onClick={decrease}>-</Button>
                    <span>{count}</span>
                <Button variant="success" disabled={count >= stock} onClick={increase}>+</Button>                
            </div>            
            <div className="addToCartBtn">
                <Button variant="outline-dark" disabled={stock <=0} onClick={()=> onAdd(count)}>Agregar al carrito</Button>    
            </div>
        </div>
     );
}
 
export default ItemCount;