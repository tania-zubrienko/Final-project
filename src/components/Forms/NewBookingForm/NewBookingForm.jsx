import { Button, Form } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import { useEffect, useState } from "react"
import bookingService from "../../../services/booking.services"
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from './../../../services/upload.services'
import AlertForm from '../AlertForm/AlertForm'
import tripServices from "../../../services/trips.services"
import { DOCUMENT_TYPE } from "../../../const/buttonConst"


const NewBookingForm = () => {
    const todayDate = new Date()
    const [minDate, setMinDate] = useState(formatDate(todayDate))
    const [maxDate, setMaxDate] = useState(formatDate(todayDate))
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        type: '',
        startDate: '',
        endDate: '',
        documents: []
    })

    const [isLoading, setIsLoading] = useState(false)

    const [errors, setErrors] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        setDateLimits()
    }, [])

    function setDateLimits() {
        tripServices
            .getTripDates(id)
            .then(({ data }) => {
                setMinDate(formatDate(new Date(data.startDate)))
                setMaxDate(formatDate(new Date(data.endDate)))
            })
            .catch(err => console.log(err))
    }

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setBookingInfo({ ...bookingInfo, [name]: value })
    }

    function handleFileUpload(e) {
        for (let i = 0; i < e.target.files.length; i++) {
            setIsLoading(true)
            const formData = new FormData()
            formData.append('imageData', e.target.files[i])

            uploadServices
                .uploadimage(formData)
                .then(({ data }) => {
                    bookingInfo.documents.push(data.cloudinary_url)
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                })
        }
    }

    function handleNewBookingSubmit(event) {

        event.preventDefault()
        bookingService
            .saveBookings(id, bookingInfo)
            .then(() => navigate(`/viajes/detalles/${id}`))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    function volver() {
        navigate(`/viajes/detalles/${id}`)
    }

    return (

        <Form onSubmit={handleNewBookingSubmit}>
            <Form.Group className="mb-3" controlId="destination-id">
                <Form.Label className='trip-label'>Tipo de reserva</Form.Label>
                <Form.Select className='trip-input' type="text" name="type" value={bookingInfo.type} onChange={handleInputOnChange} >
                    <option >Elige un tipo de reserva </option>
                    {DOCUMENT_TYPE.map(e => <option value={e} key={e}>{e}</option>)}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='trip-label'>Nombre</Form.Label>
                <Form.Control className='trip-input' type="text" placeholder="Ponle un nombre a la reserva" name="name" value={bookingInfo.name} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
                <Form.Label className='trip-label'>Entrada</Form.Label>
                <Form.Control className='trip-input' type="date" min={minDate} max={bookingInfo.endDate ? bookingInfo.endDate : maxDate} placeholder="Introduce la fecha de ida" name="startDate" value={bookingInfo.startDate} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEndDate">
                <Form.Label className='trip-label'>Salida</Form.Label>
                <Form.Control className='trip-input' type="date" min={bookingInfo.startDate ? bookingInfo.startDate : minDate} max={maxDate} placeholder="Introduce la fecha de vuelta" name="endDate" value={bookingInfo.endDate} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDocument">
                <Form.Label className='trip-label'>Documento</Form.Label>
                <Form.Control className='trip-input' type="file" multiple placeholder="Introduce los archivos de tu reserva" name="documents" onChange={handleFileUpload} />
            </Form.Group>

            {
                errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
            }

            <div className="d-grid gap-2 mt-3 d-flex">
                <Button className='primary-button' type="submit" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : 'Crear'}
                </Button>
                <Button className='primary-button2' onClick={volver}>
                    Volver atrás
                </Button>
            </div>
        </Form>
    )
}

export default NewBookingForm