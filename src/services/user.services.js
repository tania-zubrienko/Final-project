import axios from "axios"

class UserServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/user`
        })
    }
    getUserData(userEmail) {
        return this.api.get(`/${userEmail}`)
    }
}

const userServices = new UserServices()
export default userServices