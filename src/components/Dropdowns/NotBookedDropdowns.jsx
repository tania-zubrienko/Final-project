import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MdOutlineNavigateNext } from "react-icons/md"
import './Dropdowns.css'
import Booked from "../Booked/Booked"

const NotBookedDropdowns = () => {

    const [notBooked, setNotBooked] = useState([])

    return (
        <div className="Dropdown mt-5">

            <Container className="mt-5">
                <h1 style={{ color: '#011e3d' }}>To be Booked</h1>
                <hr />

                <Row className="row" style={{ backgroundColor: '#e6e6e6', color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                    <Col md={{ span: 4 }}>
                        <h1>Flights </h1>
                    </Col>
                    <Col md={{ offset: 7, span: 1 }}>
                        <h1><MdOutlineNavigateNext style={{ color: '#011e3d' }} /></h1>
                    </Col>
                </Row>

            </Container>

            <Booked />
        </div>


    )
}

export default NotBookedDropdowns