import './Signin.css'
import { useContext, useState } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import authServices from '../../services/Auth.services'
import { MessageContext } from '../../contexts/message.contexts'
import { AuthContext } from '../../contexts/auth.contexts'


const Signin = () => {

    const[signinData, setSigninData] = useState({
        email: '', 
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSigninData({ ...signinData, [name]: value })
    }


    const handleSubmit = event => {
        event.preventDefault()

        authServices
            .signin(signinData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                setShowMessage({ show: true, title: `Welcome! ${signinData.email}`, text: 'You have succesfully login!' })
                navigate('/')
            })
            .catch(err => {
                setShowMessage({ show: true, title: `Error`, text: 'Please check your email and password and try again!' })
                console.log(err)
            })
    }


    const {email, password} = signinData

    return (
        <Container className='signin-container'>
            <Form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>


                <Form.Group className="d-grid">
                    <Button variant="dark" type="submit">Login</Button>
                </Form.Group>
            </Form>
            <p>¿No tienes una cuenta?  <a href='/register'> Crear cuenta </a></p>
        </Container>
    )
}

export default Signin