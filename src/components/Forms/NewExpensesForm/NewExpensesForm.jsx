import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const NewExpenseForm = () => {
    const [expenseInfo, setExpenseInfo] = useState({
        concept: '',
        cost: 0
    })

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setExpenseInfo({ ...expenseInfo, [name]: value })
    }

    function handleNewExpenseSubmit(event) {
        event.preventDefault()
        
        // tripServices
            
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
                    <Form onSubmit={ handleNewExpenseSubmit }>
                        <Form.Group className="mb-3" controlId="destination-id">
                            <Form.Label className='trip-label'>Asunto</Form.Label>
                            <Form.Control className='trip-input' type="text" placeholder="Añade en que ha sido el gasto" name="concept" value={ expenseInfo.concept } onChange={ handleInputOnChange } />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicStartDate">
                            <Form.Label className='trip-label'>Cantidad</Form.Label>
                            <Form.Control className='trip-input' type="number" min="0" data-number-to-fixed="2" data-number-stepfactor="100" placeholder="Añade la cantidad de dinero" name="cost" value={ expenseInfo.cost } onChange={ handleInputOnChange } />
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

export default NewExpenseForm