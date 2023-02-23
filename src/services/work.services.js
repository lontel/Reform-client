import axios from 'axios'

class WorkService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/work`
        })

        // this.api.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }


    getAll() {
        return this.api.get('/all')
    }

    getOne(work_id) {
        return this.api.get(`/one/${work_id}`)
    }

    create(workData) {
        return this.api.post('/create', workData)
    }

    edit(work_id, workData) {
        return this.api.put(`/edit/${work_id}`, workData)
    }

    delete(work_id) {
        return this.api.delete(`/delete/${work_id}`)
    }


}

const workService = new WorkService()

export default workService