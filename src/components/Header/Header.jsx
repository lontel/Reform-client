import './Header.css'
import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import logo from '../../resources/logo.jpeg'


const Header = () => {
  return (
    <div className='navbar-container'>
     
        <Container className='logo-container'>
          <Navbar.Brand href="/"><Image src={logo} alt='logo'/></Navbar.Brand>
        </Container>
      <Container className='navigation'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <Nav.Link as="span" href="/Inicio">Inicio</Nav.Link>
              <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                <NavDropdown.Item  href="/">Cocinas</NavDropdown.Item>
                <NavDropdown.Item href="/">Baños</NavDropdown.Item>
                <NavDropdown.Item href="/">Dormitorios</NavDropdown.Item>
                <NavDropdown.Item href="/">Terrazas y Balcones</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as="span" href="/">Conócenos</Nav.Link>
              <Nav.Link as="span" href="/">Contacto</Nav.Link>
            </div>
          </div>
        </nav>
      </Container>
    </div>
    )
  }
  
  
  export default Header
  
