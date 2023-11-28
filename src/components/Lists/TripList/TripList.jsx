import { Row } from "react-bootstrap"
import cabeceraProvisional from '../../../assets/cabeceraProvisional.jpeg'
import TripCard from "../../Cards/TripCard/TripCard"
import Loader from "../../Loader/Loader"

const TripList = ({ trips }) => {

    return (
        !trips ?
            <Loader />
        :
            <Row>
                {
                    trips.map((trip, i) => {
                        return (
                            <TripCard key={ i } image={cabeceraProvisional} destination={trip.destination} startDate={trip.startDate} endDate={trip.endDate}></TripCard>
                        )
                    })
                }
            </Row>
    )
}

export default TripList