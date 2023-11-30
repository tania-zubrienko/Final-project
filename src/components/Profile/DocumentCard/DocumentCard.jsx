import { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap"
import DocumentsForm from '../../Forms/DocumentsForm/DocumentsForm.jsx'

const DocumentCard = ({ type, getDocuments, children }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const finishActions = () => {
        handleClose()
        getDocuments()
    }
    
    return (
        <Col sm={10} md={8} lg={8} xl={6} className='mt-1'>
            <Card>
                <Card.Body>
                    <Row className='align-items-center justify-content-center justify-content-sm-between'>
                        <Col xs={7} sm={6} md={6} xl={5}>
                            <Card.Title className='m-0'>{type}</Card.Title>
                        </Col>
                        <Col xs={7} sm={5} md={6} lg={5} xxl={4}>
                            {
                                children ?
                                    <>
                                        <Button variant="primary" onClick={handleShow}>Ver</Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Vamos a ver...</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Row>
                                                    <img src={children.link} alt="" />
                                                </Row>
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                :
                                    <>
                                        <Button variant="primary" onClick={handleShow}>Subir</Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Vamos a subir...</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <DocumentsForm finishActions={finishActions}></DocumentsForm>
                                            </Modal.Body>
                                        </Modal>
                                    </>
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DocumentCard