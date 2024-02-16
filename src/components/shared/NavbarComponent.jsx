import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SiCoinmarketcap } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";




const NavbarComponent = () => {
    // TODO: Get Data from Context Store
    // const { count } = useContext(CartContext);

    // TODO: TO Get Data from ReduxToolKit Store
    const { CartCount } = useSelector((state) => state.Cart)
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                {/*Logo */}
                <Navbar.Brand as={Link} to='/' ><SiCoinmarketcap fontSize={32} />
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to='/cart'><FaShoppingCart fontSize={22} />{
                        CartCount === 0 ? "" : <span style={{ position: 'relative', top: '-10px' }}>{CartCount}</span>
                    }</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
