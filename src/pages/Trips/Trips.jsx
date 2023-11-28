import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"
import UserTrips from "../../components/UserTrips/UserTrips";
const Trips = () => {

    const [userTrips, setUserTrips] = useState()

    useEffect(() => {
        console.log("se renderizó, paso a servicios")
        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="Trips">
            {userTrips && userTrips.map(e => <UserTrips key={e._id} destination={e.destination} date={{ end: e.endDate, start: e.startDate }} />)}
        </div>
    )
}

export default Trips