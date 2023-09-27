import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="Navbarmenu" bg="danger" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="d-lg-none">
                    <img src="favicon.png" className="me-2" />
                    <span className="text-brand">Happy Cake</span>
                </Navbar.Brand>

                <Navbar.Toggle />
                
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link to="/" className="m-2 text-decoration-none">
                            <FontAwesomeIcon icon={faHouse} /> Inicio
                        </Link>
                        
                        <Link to="/contacto" className="m-2 text-decoration-none">
                            <FontAwesomeIcon icon={faEnvelope} /> Contacto
                        </Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand className="d-none d-lg-block">
                    <span className="text-brand">Happy Cake</span>
                    <img src="favicon.png" className="ms-2" />
                </Navbar.Brand>
            </Container>
        </Navbar>        
    );
};

export default Navigation;