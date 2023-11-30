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
        <div className="HeaderExpenses">
            <Container className="mb-5">
                <Row className="mb-5">
                    <h1>Add Expense</h1>
                    <Col md={4}>
                        <h3>With you and</h3>
                    </Col>
                    <Col md={6}>
                        <div className="where">
                            <figure>
                                <img src={cabeceraProvisional} alt="" />
                            </figure>
                            <h5>All of {tripName}</h5>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )

}

export default HeaderExpenses