import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import uploadServices from './../../../services/upload.services'
import userServices from "../../../services/user.services"

const DocumentsForm = ({ finishActions, type }) => {
    const [documentInfo, setDocumentInfo] = useState({
        type: type,
        link: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    function handleFileUpload(e) {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setDocumentInfo({ ...documentInfo, link: data.cloudinary_url })
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    function handleNewDocumentSubmit(event) {
        event.preventDefault()
        userServices
            .saveDocument(documentInfo)
            .then(() => {
                finishActions()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleNewDocumentSubmit}>
            <Form.Group className="mb-3" controlId="doc_type">
                <Form.Label className='trip-label'>Tipo de documento</Form.Label>
                <Form.Select className='trip-input' type="text" name="type" defaultValue={type} disabled >
                    <option value={type}>{type}</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDocument">
                <Form.Label className='trip-label'>Documento</Form.Label>
                <Form.Control className='trip-input' type="file" placeholder="Introduce los archivos de tu reserva" name="document" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
                <Button className='primary-button' type="submit" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : 'Subir'}
                </Button>
            </div>
        </Form>

    )
}

export default DocumentsForm