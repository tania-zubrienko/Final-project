import { useState } from "react"
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import tripServices from '../../../services/trips.services'

const NewTripForm = () => {
    const todayDate = new Date()
    const minDate = formatDate(todayDate)
    const [tripInfo, setTripInfo] = useState({
        destination: '',
        startDate: '',
        endDate: ''
    })

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setTripInfo({ ...tripInfo, [name]: value })
    }

    function handleNewTripSubmit(event) {
        event.preventDefault()
        
        // tripServices
            
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
                    <Form onSubmit={ handleNewTripSubmit }>
                        <Form.Group className="mb-3" controlId="destination-id">
                            <Form.Label className='trip-label'>Destino</Form.Label>
                            <Form.Control className='trip-input' type="text" placeholder="Introduce el destino" name="destination" value={ tripInfo.destination } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicStartDate">
                            <Form.Label className='trip-label'>Ida</Form.Label>
                            <Form.Control className='trip-input' type="date" min={ minDate } placeholder="Introduce la fecha de ida" name="startDate" value={ tripInfo.startDate } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEndDate">
                            <Form.Label className='trip-label'>Vuelta</Form.Label>
                            <Form.Control className='trip-input' type="date" min={ tripInfo.startDate } placeholder="Introduce la fecha de vuelta" name="endDate" value={ tripInfo.endDate } onChange={ handleInputOnChange } />
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

export default NewTripForm