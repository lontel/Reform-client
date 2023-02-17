import { Routes, Route } from 'react-router-dom'
import Register from '../components/Register/Register'
import AboutPage from '../pages/AboutPage'
 

const AppRoutes = () => {
    return (
       <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<AboutPage/>}/>

       </Routes>
    )
}

export default AppRoutes