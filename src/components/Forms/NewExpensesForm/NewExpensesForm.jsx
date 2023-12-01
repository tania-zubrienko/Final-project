import { Button, Col, Container, Form, Row } from "react-bootstrap"
import HeaderExpenses from './../../Expenses/HeaderExpenses'
import BodyExpenses from './../../Expenses/BodyExpenses'
import FooterExpenses from './../../Expenses/FooterExpenses'
import AlertForm from '../AlertForm/AlertForm'
import { useParams, useNavigate } from "react-router-dom"
import tripServices from "../../../services/trips.services"
import { useState } from "react"


const NewExpenseForm = () => {

    const { id } = useParams()
    const [expenseInfo, setExpenseInfo] = useState({
        concept: '',
        cost: 0
    })

    const [errors, setErrors] = useState([])

    function handleNewExpenseSubmit(event) {
        event.preventDefault()

        tripServices
            .addExpensetoTrip(id, expenseInfo)
            .then(trip => {
                console.log(expenseInfo)
                console.log(trip.data.result)
                //navigate('/')
            })
            .catch(err => setErrors(err))

    }

    function addExpenseInfo(newExpense) {
        setExpenseInfo(newExpense)
    }

    return (
        <Container>
            <Row className="justify-content-center mt-3 mb-3">
                <Col md={7}>
                    <Form onSubmit={handleNewExpenseSubmit}>
                        <HeaderExpenses id={id} />
                        <BodyExpenses expenseInfo={expenseInfo} addExpenseInfo={addExpenseInfo} />
                        <FooterExpenses id={id} />

                        {
                            errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
                        }

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