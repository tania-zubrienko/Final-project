import { useState } from "react"
import { Container, Row, Accordion } from "react-bootstrap"
import { FaPlus } from "react-icons/fa6"
import './Dropdowns.css'
import Booked from "../Booked/Booked"
import { Link, useParams } from "react-router-dom"

const BookedDropdowns = () => {

    const [booked, setBooked] = useState([])

    const { id } = useParams

    return (
        <div className="Dropdown">


            <Container className="mt-5">
                <Link to={`/viajes/reservas/${id}/crear`}><div className="btnAdd"><h3><FaPlus /></h3></div></Link>

                <br />
                <h1 style={{ color: '#011e3d' }}>Booked</h1>
                <hr />


                <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Flights</h3></Accordion.Header>
                            <Accordion.Body>
                                <Booked />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

            </Container>
        </div>


    )

}

export default BookedDropdowns