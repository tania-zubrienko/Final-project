import './UserTrips.css'
import profileImg from '../../assets/profileDefault.png'
import formatDate from '../../utils/date-utils'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserTrips = ({ destination, date, tripId, tripImage }) => {

    const endDate = (formatDate(new Date(Date.parse(date.end))))
    const startDate = (formatDate(new Date(Date.parse(date.start))))



    return (
        <Container>
            <Link to={`/viajes/detalles/${tripId}`} className='UserTrips'>

                <img src={tripImage} alt='' />
                <div className='info'>
                    <h5>{destination}</h5>
                    <p>Desde {startDate}  Hasta {endDate}</p>
                </div>

            </Link>
        </Container>
    )
}

export default UserTrips