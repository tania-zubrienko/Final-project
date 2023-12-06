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
                        <Col className="col" xs={10} md={{ offset: 1, span: 2 }}>
                            <h5> { booked.name } </h5>
                        </Col>
                        <Col className="col" xs={10} md={{ offset: 2, span: 3 }}>
                                <h5> {shortDate(new Date(Date.parse(booked.startDate)))}-{shortDate(new Date(Date.parse(booked.endDate)))} </h5>
                        </Col>
                        <Col xs={5} md={{ offset: 1, span: 1 }} className="col pt-3">
                            <h5><FaRegCircleCheck /> </h5>
                        </Col>
                        <Col xs={5} md={{ offset: 1, span: 1 }}>
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
                    <Row className="align-items-center justify-content-center justify-content-md-start">
                        <Col className="col" xs={10} md={{ offset: 1, span: 2 }}>
                            <h5> { booked.type } </h5>
                        </Col>
                    </Row>
                </div>
            </Container >
    )
}

export default Booked