import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"



import TripList from "../../components/Lists/TripList/TripList"


const Trips = () => {

    const [userPastTrips, setUserPastTrips] = useState()

    useEffect(() => {

        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="Trips">
            <TripList trips={userTrips}></TripList>
        </div>
    )
}

export default Trips