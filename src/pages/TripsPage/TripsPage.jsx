import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"
import TripList from "../../components/Lists/TripList/TripList"
import AddButton from "../../components/Button/AddButton"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const TripsPage = () => {

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
            <Container >

                <Link to="/viajes/crear">
                    <AddButton pageName='viajes' />
                </Link>

                <h1 className="mt-5"> Viajes pendientes</h1>
                <TripList trips={userFutureTrips}></TripList>
                <h1 className="mt-5"> Viajes realizados</h1>
                <TripList trips={userPastTrips}></TripList>
            </Container>
        </div>
    )
}

export default TripsPage
