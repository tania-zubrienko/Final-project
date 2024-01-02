import axios from 'axios'

class PlanServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/plans`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getPlans(tripId) {
        return this.api.get('/', { tripId })
    }

    filterPlans(id, planDate) {
        console.log(id, planDate)
        return this.api.post(`/filter/${id}`, { planDate })
    }

    getPlanDate(tripId, planId) {
        return this.api.get(`/planDate/${tripId}?${planId}`)
    }

}

const planService = new PlanServices()
export default planService