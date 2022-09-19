import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./CartWidget.css"


const NavBar = () => {
    return ( 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">            
            Elite Sport
          </Navbar.Brand>
            <Nav className="me-auto">                
                <Nav.Link href="#futbol">Futbol</Nav.Link>
                <Nav.Link href="#basquet">Basquet</Nav.Link>
                <Nav.Link href="#hockey">Hockey</Nav.Link>
                <Nav.Link href="#deportiva">Deportiva</Nav.Link>
                
            </Nav>
            <CartWidget />
        </Container>
      </Navbar>
    );
}
 
export default NavBar;