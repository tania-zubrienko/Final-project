import { Container, Row, Col, Button } from "react-bootstrap"
import { FaRegCircleCheck } from "react-icons/fa6"
import './Booked.css'
import shortDate from "../../utils/shortDate"

const Booked = ({ booked }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteDocument = (e) => {
        const documentId = e.target.value
        console.log(documentId)
        userServices
            .deleteDocument(documentId)
            .then(() => {
                console.log('eliminado')
                getDocuments()
                handleClose()
            })
            .catch(err => console.log(err))
    }

    // const finishActions = () => {
    //     handleClose()
    //     getDocuments()
    // }

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
                                            <Modal.Title>{booked.type}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Row>
                                                <img src={booked.documents} alt="" />
                                            </Row>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" value={children._id} onClick={deleteDocument}><h3><MdDeleteOutline /></h3></Button>
                                        </Modal.Footer>
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