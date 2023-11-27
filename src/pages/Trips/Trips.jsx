import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"
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
            {userTrips && userTrips.map(e => <h1 key={e._id}>{e.destination}</h1>)}
        </div>
    )
}

export default Trips