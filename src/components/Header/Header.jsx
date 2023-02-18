import './Header.css'
import React, { useContext } from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import logo from '../../resources/logo.jpeg'
import { AuthContext } from '../../contexts/auth.contexts'
import { MessageContext } from '../../contexts/message.contexts'
import { Link } from 'react-router-dom'



const Header = () => {

  const {user, logoutUser} = useContext(AuthContext)
  const { setShowMessage } = useContext(MessageContext)

  const logout = () => {
        setShowMessage({ show: true, title: 'Good bye!', text: 'Your session has been succesfully closed' })
        logoutUser()
    }

  return (
    <div className="container">
      <Navbar.Brand href="/"><Image src={logo} alt='logo'/></Navbar.Brand>
      <Navbar expand="sm">
        <Container className='header-container'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                <NavDropdown.Item  href="/">Cocinas</NavDropdown.Item>
                <NavDropdown.Item href="/">Baños</NavDropdown.Item>
                <NavDropdown.Item href="/">Dormitorios</NavDropdown.Item>
                <NavDropdown.Item href="/">Terrazas y Balcones</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">Conócenos</Nav.Link>
              <Nav.Link href="/">Contacto</Nav.Link>
              {
                user ?
                <Link to="/signin">
                  <Nav.Link as="span" onClick={logout} >Logout</Nav.Link>
                </Link>
                :
                <Nav.Link href="/signin">Iniciar Sesión</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
  }
  
  
  export default Header
  
