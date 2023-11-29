import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import uploadServices from './../../../services/upload.services'
import userServices from "../../../services/user.services"

const DocumentsForm = () => {
    const [documentInfo, setDocumentInfo] = useState({
        type: '',
        link: ''
    })

    const navigate = useNavigate()

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setDocumentInfo({ ...documentInfo, [name]: value })
    }

    function handleFileUpload(e) {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setDocumentInfo({ ...documentInfo, link: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleNewDocumentSubmit(event) {
        event.preventDefault()
        userServices
            .saveDocument(documentInfo)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
                    <Form onSubmit={handleNewDocumentSubmit}>
                        <Form.Group className="mb-3" controlId="doc_type">
                            <Form.Label className='trip-label'>Tipo de documento</Form.Label>
                            <Form.Select className='trip-input' type="text" name="type" value={documentInfo.type} onChange={handleInputOnChange} >
                                <option value="DNI">DNI</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Carnet">Carnet</option>
                                <option value="Seguro">Seguro</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDocument">
                            <Form.Label className='trip-label'>Documento</Form.Label>
                            <Form.Control className='trip-input' type="file" placeholder="Introduce los archivos de tu reserva" name="document" onChange={handleFileUpload}  />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-4">
                            <Button className='primary-button' type="submit">
                                Subir
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default DocumentsForm