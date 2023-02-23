import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'
import './MyAccountPage.css'
import Nav from 'react-bootstrap/Nav'

const MyAccountPage = () => {

    const {user} = useContext(AuthContext)

    return(
        <>
            <h2>Mi cuenta</h2>
            {
                user?.role === 'admin' && <Nav.Link href="/works-form">Subir obra nueva</Nav.Link>
            }
        </>
    )
    
       
}

export default MyAccountPage