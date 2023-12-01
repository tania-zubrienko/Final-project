import { Button, Form } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import { useState } from "react"
import bookingService from "../../../services/booking.services"
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from './../../../services/upload.services'
import AlertForm from '../AlertForm/AlertForm'


const NewBookingForm = () => {
    const todayDate = new Date()
    const minDate = formatDate(todayDate)
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        type: '',
        startDate: '',
        endDate: '',
        documents: []
    })

    const [errors, setErrors] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setBookingInfo({ ...bookingInfo, [name]: value })

    }

    function handleFileUpload(e) {
        for (let i = 0; i < e.target.files.length; i++) {
            const formData = new FormData()
            formData.append('imageData', e.target.files[i])

            uploadServices
                .uploadimage(formData)
                .then(({ data }) => {
                    bookingInfo.documents.push(data.cloudinary_url)
                })
                .catch(err => console.log(err))
        }
    }

    function handleNewBookingSubmit(event) {

        event.preventDefault()
        bookingService
            .saveBookings(bookingInfo, id)
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (

        <Form onSubmit={handleNewBookingSubmit}>
            <Form.Group className="mb-3" controlId="destination-id">
                <Form.Label className='trip-label'>Tipo de reserva</Form.Label>
                <Form.Select className='trip-input' type="text" name="type" value={bookingInfo.type} onChange={handleInputOnChange} >
                    <option value="Hotel">Hotel</option>
                    <option value="Avión">Avión</option>
                    <option value="Tren">Tren</option>
                    <option value="Bus">Bus</option>
                    <option value="Entradas">Entradas</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='trip-label'>Nombre</Form.Label>
                <Form.Control className='trip-input' type="text" placeholder="Introduce tu nombre" name="name" value={bookingInfo.name} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
                <Form.Label className='trip-label'>Entrada</Form.Label>
                <Form.Control className='trip-input' type="date" min={minDate} placeholder="Introduce la fecha de ida" name="startDate" value={bookingInfo.startDate} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEndDate">
                <Form.Label className='trip-label'>Salida</Form.Label>
                <Form.Control className='trip-input' type="date" min={bookingInfo.startDate} placeholder="Introduce la fecha de vuelta" name="endDate" value={bookingInfo.endDate} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDocument">
                <Form.Label className='trip-label'>Documento</Form.Label>
                <Form.Control className='trip-input' type="file" multiple placeholder="Introduce los archivos de tu reserva" name="documents" onChange={handleFileUpload} />
            </Form.Group>

            {
                errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
            }

            <div className="d-grid gap-2 mt-5">
                <Button className='primary-button' type="submit">
                    Crear
                </Button>
            </div>
        </Form>
    )
}

export default NewBookingForm