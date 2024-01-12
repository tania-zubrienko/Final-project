import { Button, Col, Container, Form, Row } from "react-bootstrap"
import HeaderExpenses from './../../Expenses/HeaderExpenses'
import BodyExpenses from './../../Expenses/BodyExpenses'
import FooterExpenses from './../../Expenses/FooterExpenses'
import AlertForm from '../AlertForm/AlertForm'
import { useParams } from "react-router-dom"
import tripServices from "../../../services/trips.services"
import { useEffect, useState } from "react"
import FriendCard from "../../Cards/FriendCard/FriendCard"


const NewExpenseForm = ({ fireFinalActions }) => {
    const { id } = useParams()
    const [expenseInfo, setExpenseInfo] = useState({
        concept: '',
        cost: 0,
        paidBy: []
    })
    useEffect(() => getmembers(), [])
    const [errors, setErrors] = useState([])
    const [friends, setFriends] = useState([])

    function getmembers() {
        tripServices
            .getParticipantList(id)
            .then(result => setFriends(result.data.result.participants))
            .catch(err => console.log(err))
    }

    function handleNewExpenseSubmit(event) {
        event.preventDefault()
        console.log(expenseInfo)
        // tripServices
        //     .addExpensetoTrip(id, expenseInfo)
        //     .then(trip => {
        //         fireFinalActions()
        //     })
        //     .catch(err => setErrors(err.response.data.errorMessage))

    }

    // function addExpenseInfo(newExpense) {
    //     console.log(newExpense)
    //     setExpenseInfo(newExpense)
    // }

    return (
        <Container>
            <Row className="justify-content-center mt-3 mb-3">
                <Col md={7}>
                    <Form onSubmit={handleNewExpenseSubmit}>
                        <HeaderExpenses id={id} />
                        <BodyExpenses expenseInfo={expenseInfo} addExpenseInfo={setExpenseInfo} friends={friends} />
                        <FooterExpenses id={id} />

                        {
                            errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
                        }

                        < div className="d-grid gap-2 mt-4" >
                            <Button className='primary-button shadow' type="submit" >
                                Crear
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default NewExpenseForm