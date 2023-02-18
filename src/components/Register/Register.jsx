import './Register.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container'
import { useContext, useState } from 'react'
import authServices from '../../services/Auth.services'
import { Link, useNavigate } from 'react-router-dom'
import { MessageContext } from '../../contexts/message.contexts'


const Register = () => {

    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const { setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = event => {
        const { value, name } = event.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        authServices
            .register(registerData)
            .then(({ data }) => {
                setShowMessage({
                    show: true, title: `Welcome, ${data.createdUser.firstName}`, text: 'You have successfully registered'
                })
                navigate('/signin')
            })
            .catch(err => console.log(err))

    }

    const {firstName, lastName, email, password} = registerData

    return (
        <Container className='register-container'>
            <Form onSubmit={handleSubmit}>
                <h2>Crear cuenta</h2>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={handleInputChange} name="firstName" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={handleInputChange} name="lastName"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>
                
                <Form.Group className="d-grid">
                    <Button variant="dark" type="submit">Submit</Button>
                </Form.Group>
            </Form>
            
            
            <p>¿Ya tienes una cuenta?  <a href='/signin'> Iniciar sesión </a></p>
        </Container>
    )
}

export default Register