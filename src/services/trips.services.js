import axios from 'axios'


class TripServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/trips`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUserTrips() {

        return this.api.get('/')
    }

    createTrip() {
        return this.api.post('/add')
    }

    deleteTrip(id) {
        return this.api.post(`/${id}/delete`)
    }

    getTripDates(id) {
        return this.api.get(`/${id}/dates`)
    }

    addExpensetoTrip(id) {
        return this.api.post(`/${id}/expenses`)
    }

    getTripById(id) {
        return this.api.get(`/${id}`)
    }
}

const tripServices = new TripServices()
export default tripServices