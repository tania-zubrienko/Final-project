import { Col, Container, Row } from "react-bootstrap"
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpeg'
import './HeaderExpenses.css'
import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"

const HeaderExpenses = ({ id }) => {

    const [tripName, setTripName] = useState("")

    useEffect(() => {
        getDestinationTrip()
    }, [])

    function getDestinationTrip() {

        tripServices
            .getTripById(id)
            .then(trip => {
                console.log(trip.data.result.destination)
                setTripName(trip.data.result.destination)
            })
            .catch(err => console.log(err))

    }



    return (
        <div className="HeaderExpenses">
            <Container className="mb-5">
                <Row>
                    <h3 className="mb-3">Add Expense</h3>
                    <Col md={12}>
                        <h5>With you and</h5>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )

}

export default HeaderExpenses