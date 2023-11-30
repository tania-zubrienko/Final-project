import { Container, Row } from "react-bootstrap"
import cabeceraProvisional from '../../../assets/cabeceraProvisional.jpg'
import TripCard from "../../Cards/TripCard/TripCard"
import Loader from "../../Loader/Loader"

const TripList = ({ trips }) => {

    return (
        !trips ?
            <Loader />
            :
            <Container>
                <Row>
                    {
                        trips.length > 0 ?
                            trips.map((trip, i) => {
                                return (
                                    <TripCard key={i} image={cabeceraProvisional} destination={trip.destination} startDate={trip.startDate} endDate={trip.endDate}></TripCard>
                                )
                            })
                            :
                            <p>No tienes viajes</p>
                    }
                </Row>
            </Container>
    )
}

export default TripList