import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"
import TripList from "../../components/Lists/TripList/TripList"
import AddButton from "../../components/Button/AddButton"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import NoTrips from "../../components/NoListed/NoTrips"
import Loader from "../../components/Loader/Loader"

const TripsPage = () => {

    const [userPastTrips, setUserPastTrips] = useState()
    const [userFutureTrips, setUserFutureTrips] = useState()

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {

        tripServices
            .getUserTrips()
            .then(result => {
                setUserFutureTrips(result.data.filter(e => new Date(e.endDate) > new Date()))
                setUserPastTrips(result.data.filter(e => new Date(e.endDate) < new Date()))
            })
            .catch(err => console.log(err))

    }

    return (

        <div className="Trips">
            <Container >
                {userFutureTrips ?
                    userFutureTrips.length > 0 ?
                        <Link to="/viajes/crear">
                            <AddButton pageName='viaje' />
                        </Link>
                        : <NoTrips />
                    :
                    <Loader />
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
