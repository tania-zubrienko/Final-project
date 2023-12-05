import axios from 'axios'


class PlaceServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/place`
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    // getPhoto(photoRef) {
    //     return this.api.get(`/getPhoto/${photoRef}`)
    // }

    getPlaceInfo(placeId) {
        return this.api.get(`/${placeId}`)
    }


}

const placeServices = new PlaceServices()
export default placeServices