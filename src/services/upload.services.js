import axios from 'axios'

class UploadService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/upload`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    uploadimage(imageForm) {
        return this.api.post('/image', imageForm)
    }

    uploadimages(imagesForm) {
        return this.api.post('/images', imagesForm)
    }


}

const uploadService = new UploadService()

export default uploadService