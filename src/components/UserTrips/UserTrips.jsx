import './UserTrips.css'
import profileImg from '../../assets/profileDefault.png'
import formatDate from '../../utils/date-utils'
import { Container } from 'react-bootstrap'

const UserTrips = ({ destination, date }) => {


    const endDate = (formatDate(new Date(Date.parse(date.end))))
    const startDate = (formatDate(new Date(Date.parse(date.start))))



    return (
        <Container>
            <div className="UserTrips">
                <img src={profileImg} alt="" />
                <div className="info">
                    <h5>{destination}</h5>
                    <p>{startDate} - {endDate}</p>
                </div>
            </div>
        </Container>
    )
}

export default UserTrips