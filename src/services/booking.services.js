import axios from "axios";

class BookingService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/bookings`
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

export default BookingService