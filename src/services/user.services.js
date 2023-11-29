import axios from "axios"

class UserServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    addFriend(friendId) {
        return this.api.get(`/add/${friendId}`)
    }

    getUserData(userEmail) {
        return this.api.get(`/find/${userEmail}`)
    }

}

const userServices = new UserServices()
export default userServices