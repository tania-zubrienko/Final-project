import axios from "axios";
import { useContext } from "react";
import { AuthContext } from './../context/auth.context'


class TripServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/trips`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUserTrips() {
        console.log("estoy en get all")
        return this.api.get('/')
    }

    createTrip() {
        return this.api.post('/add')
    }

    deleteTrip(id) {
        return this.api.post(`/${id}/delete`)
    }
}

const tripServices = new TripServices()
export default tripServices