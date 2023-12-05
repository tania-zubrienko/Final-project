import { useState } from "react"

import { Container, Row, Accordion } from "react-bootstrap"

import './Dropdowns.css'
import Booked from "../Booked/Booked"

const NotBookedDropdowns = () => {

    const [notBooked, setNotBooked] = useState([])

    return (
        <div className="Dropdown mt-5">

            <Container className="mt-5">

                <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px", marginBottom: "3vh" }}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>Reservas pendientes</h3></Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

            </Container>

        </div>


    )
}

export default NotBookedDropdowns