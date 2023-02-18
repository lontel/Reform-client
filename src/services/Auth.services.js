import axios from 'axios'

class AuthServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/auth/`
        })
    }

    register(userData) {
        return this.api.post('/register', userData)
    }

    signin(userData) {
        return this.api.post('/signin', userData)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

}

const authServices = new AuthServices()

export default authServices