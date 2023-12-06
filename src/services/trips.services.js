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

    getPastTrips() {
        return this.api.get('/past')
    }

    getFutureTrips() {
        return this.api.get('/future')
    }

    createTrip(tripInfo) {
        return this.api.post('/add', tripInfo)
    }

    // getPlaceInfo(placeId) {
    //     return this.api.get(`/place/${placeId}`)
    // }
    deleteTrip(id) {
        return this.api.post(`/${id}/delete`)
    }

    getTripDates(id) {
        return this.api.get(`/${id}/dates`)
    }

    addExpensetoTrip(id, body) {
        return this.api.post(`/${id}/expenses`, body)
    }


    addPlantoTrip(id, body) {
        console.log("estoy en AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd")
        return this.api.post(`/${id}/plan`, { placeId: body.placeId, name: body.name })
    }

    getParticipantList(id) {
        console.log(id)
        return this.api.get(`/${id}/participants`)
    }

    addParticipants(participantsArray, id) {
        console.log(participantsArray)
        return this.api.post(`/${id}/edit`, participantsArray)
    }

    deleteParticipant(participantId, tripId) {
        return this.api.post(`/${tripId}/deleteMember`, { member: participantId })
    }

    deletePlan(tripId, currentId) {
        console.log("estoy entrando aquiiiiiiiiiiiiiii")
        return this.api.post(`/${tripId}/deletePlan`, { planId: currentId })
    }

    getTripById(id) {
        return this.api.get(`/${id}`)
    }
}

const tripServices = new TripServices()
export default tripServices