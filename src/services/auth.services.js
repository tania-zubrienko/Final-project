import axios from "axios";

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/auth`
        })
    }

    signup(user) {
        return this.api.post('/signup', user)
    }

    login(user) {
        return this.api.post('/login', user)
    }

    verify(authToken) {
        return this.api.get('/verify',
            { headers: { Authorization: `Baerer ${authToken}` } })
    }
}

const authService = new AuthService()
export default authService