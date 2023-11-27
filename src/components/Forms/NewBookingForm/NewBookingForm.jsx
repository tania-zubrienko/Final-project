import { Button, Col, Container, Form, Row } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import { useState } from "react"

const NewBookingForm = () => {
    const todayDate = new Date()
    const minDate = formatDate(todayDate)
    const [bookingInfo, setBookingInfo] = useState({
        type: '',
        startDate: '',
        endDate: '',
        document: ''
    })

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setBookingInfo({ ...bookingInfo, [name]: value })
    }

    function handleNewBookingSubmit(event) {
        event.preventDefault()
        //TODO: implement services
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

                        <Form.Group className="mb-3" controlId="formBasicStartDate">
                            <Form.Label className='trip-label'>Entrada</Form.Label>
                            <Form.Control className='trip-input' type="date" min={ minDate } placeholder="Introduce la fecha de ida" name="startDate" value={ bookingInfo.startDate } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEndDate">
                            <Form.Label className='trip-label'>Salida</Form.Label>
                            <Form.Control className='trip-input' type="date" min={ bookingInfo.startDate } placeholder="Introduce la fecha de vuelta" name="endDate" value={ bookingInfo.endDate } onChange={ handleInputOnChange } />
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