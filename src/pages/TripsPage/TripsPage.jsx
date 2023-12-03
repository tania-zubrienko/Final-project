import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"
import TripList from "../../components/Lists/TripList/TripList"
import AddButton from "../../components/Button/AddButton"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import NoTrips from "../../components/NoListed/NoTrips"

const TripsPage = () => {

    const [userPastTrips, setUserPastTrips] = useState()
    const [userFutureTrips, setUserFutureTrips] = useState()

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        tripServices
            .getPastTrips()
            .then(res => setUserPastTrips(res.data))
            .catch(err => console.log(err))
        tripServices
            .getFutureTrips()
            .then(res => setUserFutureTrips(res.data))
            .catch(err => console.log(err))
    }

    return (

        <div className="Trips">
            <Container >

                {userFutureTrips &&
                    userFutureTrips.length > 0 ?
                    <Link to="/viajes/crear">
                        <AddButton pageName='viaje' />
                    </Link>
                    : <NoTrips />
                }

                <h1 className="mt-5"> Viajes pendientes</h1>

                <TripList trips={userFutureTrips} refresh={getTrips}></TripList>
                <h1 className="mt-5"> Viajes realizados</h1>
                <TripList trips={userPastTrips}></TripList>
            </Container>
        </div >
    )
}

export default TripsPage
