import { useEffect, useState } from "react"
import authService from "../../services/auth.services"
import tripServices from "../../services/trips.services"



import TripList from "../../components/Lists/TripList/TripList"
import AddButton from "../../components/Button/AddButton"


const Trips = () => {

    const [userTrips, setUserTrips] = useState()

    useEffect(() => {

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
            <AddButton />
            <TripList trips={fakeTrips}></TripList>
        </div>
    )
}

export default Trips