import axios from "axios"

class googlePlacesAPI {
    constructor() {
        this.api = axios.create({
            baseURL: `https://places.googleapis.com/v1/places:searchNearby`
        })

        this.api.interceptors.request.use((config) => {

            config.headers = {
                "X-Goog-Api-Key": "AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw",

                "X-Goog-FieldMask":
                    `places.id,places.formattedAddress,places.displayName.text,places.currentOpeningHours.weekdayDescriptions,places.googleMapsUri,places.websiteUri,places.rating,places.types`,
                "Content-Type": `application/json`
            }
            return config
        })


    }

    getPlaceBycoords(latitude, longitude) {
        const body = {
            "includedTypes": ["tourist_attraction", "art_gallery", "museum", "performing_arts_theater"],
            "maxResultCount": 14,
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": latitude,
                        "longitude": longitude
                    },
                    "radius": 5000.0
                }
            }
        }

        return this.api.post("/", body)
    }

    // FUMADA DE TANIA
    //getPlacesPhoto(recs) {
    //     const indexes = []
    //     recs.forEach(e => indexes.push(e.id))
    //     const promises = []
    //     indexes.forEach(idx => promises.push(
    //         https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJYU3uJXIpQg0RvX9u3A7Bfnw&key=AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw
    //     ))
    // }


    getPhotoReferences() {

    }
}

const googlePlcesServices = new googlePlacesAPI()

export default googlePlcesServices

