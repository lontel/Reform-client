import { Routes, Route } from 'react-router-dom'
import Register from '../components/Register/Register'
import Signin from '../components/Signin/Signin'
import AboutPage from '../pages/AboutPage'
 

const AppRoutes = () => {
    return (
       <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<AboutPage/>}/>
       </Routes>
    )
}

export default AppRoutes