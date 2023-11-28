import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"

import UserTrips from "../../components/UserTrips/UserTrips";

import TripList from "../../components/Lists/TripList/TripList"


const Trips = () => {

    const [userTrips, setUserTrips] = useState()

    useEffect(() => {
        console.log("se renderizó, paso a servicios")
        tripServices
            .getUserTrips()
            .then(res => setUserTrips(res.data))
            .catch(err => console.log(err))

    }, [])

    const fakeTrips = [
        {
            destination: 'Madrid',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Barcelona',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Pereira',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Roma',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Galicia',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'París',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Copenhague',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Dublin',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Narnia',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'La Luna',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Jamaica',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        },
        {
            destination: 'Tiki Tiki',
            startDate: '24-09-2023',
            endDate: '26-09-2023',
        }
    ]


    return (
        <div className="Trips">
            {userTrips && userTrips.map(e => <UserTrips key={e._id} destination={e.destination} date={{ end: e.endDate, start: e.startDate }} />)}
        </div>
    )
}

export default Trips