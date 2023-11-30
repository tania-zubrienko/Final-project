import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"



import TripList from "../../components/Lists/TripList/TripList"
import AddButton from "../../components/Button/AddButton"


const Trips = () => {

    const [userPastTrips, setUserPastTrips] = useState()
    const [userFutureTrips, setUserFutureTrips] = useState()

    useEffect(() => {

        tripServices
            .getPastTrips()
            .then(res => setUserPastTrips(res.data))
            .catch(err => console.log(err))
        tripServices
            .getFutureTrips()
            .then(res => setUserFutureTrips(res.data))
            .catch(err => console.log(err))
    }, [])


    return (

        <div className="Trips">
            <AddButton />
            Viajes pendientes
            <TripList trips={userFutureTrips}></TripList>
            Viajes pasados
            <TripList trips={userPastTrips}></TripList>
        </div>
    )
}

export default Trips