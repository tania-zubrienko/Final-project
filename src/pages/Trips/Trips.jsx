import { useEffect } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"
const Trips = () => {

    useEffect(() => {
        tripServices
            .getUserTrips()
            .then(() => console.log("success"))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="Trips">
            Soy trips
        </div>
    )
}

export default Trips