import axios from 'axios'

class BookingService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/bookings`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getBookings() {
        return this.api.get('/')
    }

    saveBookings(booking) {
        return this.api.post('/add', booking)
    }

    editBookings(id, booking) {
        return this.api.post(`edit/${id}`, booking)
    }

    deleteBookings(id) {
        return this.api.post(`/delete/${id}`)
    }

}

const bookingService = new BookingService()
export default bookingService