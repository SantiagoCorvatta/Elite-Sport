import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


const Item = ({product}) => {
    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} unidades`);
      } 
    return ( 
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImg' variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}                    
                </Card.Text>
                <Card.Text>
                   $ {product.price}
                </Card.Text>                
                    <Link to={`/item/${product.id}`}>
                       <Button className='detailBtn' variant="primary"> 
                            Ver detalle
                        </Button> 
                    </Link>                  
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                
            </Card.Body>
        </Card>
  );
     
    
}
 
export default Item;             
                
          