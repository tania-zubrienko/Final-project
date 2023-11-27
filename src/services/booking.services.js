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
        return this.api.post('/add')
    }

    editBookings(id, booking) {
        return this.api.post('edit/:id')
    }

    deleteBookings(id) {
        return this.api.post('/delete/:id')
    }

}