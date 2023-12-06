import { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap"
import { MdDeleteOutline } from "react-icons/md"
import DocumentsForm from '../../Forms/DocumentsForm/DocumentsForm.jsx'
import userServices from "../../../services/user.services.js"
import './DocumentCard.css'

const DocumentCard = ({ type, getDocuments, children }) => {
    const [show, setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }
    function handleShow() {
        setShow(true)
    }

    function finishActions() {
        handleClose()
        getDocuments()
    }

    function deleteDocument(e) {

        const documentId = e.target.value

        userServices
            .deleteDocument(documentId)
            .then(() => {
                getDocuments()
                handleClose()
            })
            .catch(err => console.log(err))
    }

    return (
        <Col sm={10} md={8} lg={8} xl={6} className='mt-1'>
            <Card>
                <Card.Body>
                    <Row className='align-items-center justify-content-between justify-content-sm-between'>
                        <Col xs={6} sm={6} md={6} xl={6}>
                            <Card.Title className='m-0'>{type}</Card.Title>
                        </Col>
                        <Col xs={4} sm={2} md={3} lg={2} xl={2} xxl={2}>
                            {
                                children ?
                                    <>
                                        <button className="see-doc-button" onClick={handleShow}></button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{type}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Row>
                                                    <img src={children.link} alt="" />
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button className="deleteButton" value={children._id} onClick={deleteDocument} />
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                    :
                                    <>
                                        <button className="add-doc-button" onClick={handleShow}></button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{type}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <DocumentsForm finishActions={finishActions} type={type}></DocumentsForm>
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