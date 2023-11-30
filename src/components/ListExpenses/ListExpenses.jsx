import { useEffect, useState } from "react"
import NoExpenses from './../NoListed/NoExpenses'
import NewExpensesForm from './../Forms/NewExpensesForm/NewExpensesForm'
import { useParams } from "react-router-dom"
import tripServices from "../../services/trips.services"
import { Modal, Container, Row, Col } from "react-bootstrap"
import AddButton from "../Button/AddButton"

const ListExpenses = () => {

    const [expensesList, setExpensesList] = useState()
    const [showModal, setShowModal] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        getTripExpenses()
    }, [])

    function getTripExpenses() {

        tripServices
            .getTripById(id)
            .then(trip => {
                console.log(trip.data.result.expenses)
                if (trip.data.result.expenses.length > 0) {
                    setExpensesList(trip.data.result.expenses)
                }
            })
            .catch(err => console.log(err))

    }



    function fireFinalActions() {
        setShowModal(false)
        getTripExpenses()
    }

    function createModal() {
        setShowModal(true)
    }

    return (
        <div className="ListExpenses">
            <Container>
                <AddButton />
                {
                    expensesList ?
                        expensesList.map((elm, id) => {
                            return (
                                <Row key={id}>
                                    <Col sm={{ offset: 1, span: 5 }}>
                                        <h5>{elm.concept}</h5>
                                    </Col>
                                    <Col sm={{ offset: 1, span: 5 }}>
                                        <h5>{elm.cost}</h5>
                                    </Col>
                                </Row>
                            )
                        })
                        :
                        <div className="noExpenses">

                            <NoExpenses createModal={createModal} />

                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Nuevo Gasto</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <NewExpensesForm fireFinalActions={fireFinalActions} />
                                </Modal.Body>
                            </Modal>

                        </div>
                }
            </Container>
        </div>
    )
}
export default ListExpenses