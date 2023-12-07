
import axios from 'axios'
class CountryService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/country`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCountryInfo(country) {
        return this.api.get(`/${country.toLowerCase()}`)
    }

}

const countryService = new CountryService()

export default countryService