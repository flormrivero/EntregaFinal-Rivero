import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-dom'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/category/barritas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Barritas de Cereal</NavLink>
            <NavLink to={`/category/desayunos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Desayunos Saludables</NavLink>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
