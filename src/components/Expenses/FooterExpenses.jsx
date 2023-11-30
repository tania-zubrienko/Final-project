import { SlPeople } from 'react-icons/sl'
import './HeaderExpenses.css'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import tripServices from '../../services/trips.services'

const FooterExpenses = ({ id }) => {

    const [tripName, setTripName] = useState("")

    useEffect(() => {
        getDestinationTrip()
    }, [])

    function getDestinationTrip() {
        console.log(id)
        tripServices
            .getTripById(id)
            .then(trip => {
                console.log(trip.data.result.destination)
                setTripName(trip.data.result.destination)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='FooterExpenses' style={{ marginTop: '5vh', marginBottom: '5vh' }}>
            <Container>
                <hr />
                <h3 className='mt-3'><SlPeople /> {tripName} Team</h3>
            </Container>
        </div>
    )
}

export default FooterExpenses