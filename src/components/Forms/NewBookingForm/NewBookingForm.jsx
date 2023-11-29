import { Button, Col, Container, Form, Row } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import { useState } from "react"
import bookingService from "../../../services/booking.services"
import { useNavigate } from "react-router-dom"


const NewBookingForm = () => {
    const todayDate = new Date()
    const minDate = formatDate(todayDate)
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        type: '',
        startDate: '',
        endDate: '',
        document: []
    })

    const navigate = useNavigate()

    function handleInputOnChange(event) {
        const { value, name, files } = event.target
        // for (let i = 0; i < files.length; i++) {
        //     console.log(files[i])
        // }
        //console.log(name, ':', value, '->', files)
        setBookingInfo({ ...bookingInfo, [name]: value })
    }

    function handleNewBookingSubmit(event) {
        event.preventDefault()
        bookingService
            .saveBookings(bookingInfo)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
                    <Form onSubmit={ handleNewBookingSubmit }>
                        <Form.Group className="mb-3" controlId="destination-id">
                            <Form.Label className='trip-label'>Tipo de reserva</Form.Label>
                            <Form.Select className='trip-input' type="text" name="type" value={ bookingInfo.type } onChange={ handleInputOnChange } >
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
                            <Form.Control className='trip-input' type="date" min={ minDate } placeholder="Introduce la fecha de ida" name="startDate" value={ bookingInfo.startDate } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEndDate">
                            <Form.Label className='trip-label'>Salida</Form.Label>
                            <Form.Control className='trip-input' type="date" min={ bookingInfo.startDate } placeholder="Introduce la fecha de vuelta" name="endDate" value={ bookingInfo.endDate } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDocument">
                            <Form.Label className='trip-label'>Documento</Form.Label>
                            <Form.Control className='trip-input' type="file" multiple placeholder="Introduce los archivos de tu reserva" name="document" value={ bookingInfo.document } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-4">
                            <Button className='primary-button' type="submit">
                                Crear
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewBookingForm