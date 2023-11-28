import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MdOutlineNavigateNext } from "react-icons/md"
import './Dropdowns.css'
import Booked from "../Booked/Booked"

const BookedDropdowns = () => {

    const [booked, setBooked] = useState([])


    return (
        <div className="Dropdown">

            <Container className="mt-5">
                <h1 style={{ color: '#011e3d' }}>Booked</h1>
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

export default BookedDropdowns