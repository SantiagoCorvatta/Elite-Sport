import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";



const NavBar = () => {
    return ( 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
              Elite Sport                 
          </Navbar.Brand>
            <Nav className="me-auto">                
                <Nav.Link as={Link} to='/category/futbol'>Futbol</Nav.Link>
                <Nav.Link as={Link} to='/category/basquet'>Basquet</Nav.Link>
                <Nav.Link as={Link} to='/category/hockey'>Hockey</Nav.Link>
                <Nav.Link as={Link} to='/category/deportiva'>Deportiva</Nav.Link>
                
            </Nav>
            <CartWidget />
        </Container>
      </Navbar>
    );
}
 
export default NavBar;
          