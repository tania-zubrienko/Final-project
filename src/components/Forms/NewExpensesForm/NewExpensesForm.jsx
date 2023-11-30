import { Button, Col, Container, Form, Row } from "react-bootstrap"
import HeaderExpenses from './../../Expenses/HeaderExpenses'
import BodyExpenses from './../../Expenses/BodyExpenses'
import FooterExpenses from './../../Expenses/FooterExpenses'
import { useParams, useNavigate } from "react-router-dom"
import tripServices from "../../../services/trips.services"


const NewExpenseForm = () => {

    const { id } = useParams()

    function handleNewExpenseSubmit(event) {
        event.preventDefault()

        tripServices
            .addExpensetoTrip(id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
                    <Form onSubmit={handleNewExpenseSubmit}>
                        <HeaderExpenses id={id} />
                        <BodyExpenses />
                        <FooterExpenses id={id} />

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