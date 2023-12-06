import { Container, Row, Col, Modal } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import './Booked.css'
import shortDate from "../../utils/shortDate"
import { useState } from "react"

const Booked = ({ booked }) => {
    const [show, setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }
    function handleShow() {
        setShow(true)
    }

    return (
        booked &&
            <Container>
                <div className="Booked">
                    <Row className="align-items-center justify-content-center">
                        <Col xs={11} sm={7} md={6}>
                            <h5> {booked.name}  ({booked.type})</h5>
                        </Col>
                        <Col xs={8} sm={4} md={4}>
                                <h5> {shortDate(new Date(Date.parse(booked.startDate)))}-{shortDate(new Date(Date.parse(booked.endDate)))} </h5>
                        </Col>
                        <Col xs={3} sm={10} md={1}>
                            {
                                booked.documents.length > 0 &&
                                <>
                                    <button className="see-document" onClick={handleShow}></button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{booked.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {
                                                booked.documents.map(doc => {
                                                    return (
                                                        <Row key={doc}>
                                                            <img src={doc} alt="" />
                                                        </Row>
                                                    )
                                                })
                                            }
                                        </Modal.Body>
                                    </Modal>
                                </>
                            }
                        </Col>
                    </Row>
                </div>
            </Container >
    )
}

export default Booked