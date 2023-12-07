import { useEffect, useState } from "react"
import NoExpenses from '../NoListed/NoExpenses'
import NewExpensesForm from '../Forms/NewExpensesForm/NewExpensesForm'
import { useParams } from "react-router-dom"
import tripServices from "../../services/trips.services"
import { Modal, Container, Row, Col } from "react-bootstrap"
import AddButton from "../Button/AddButton"
import './ListExpenses.css'
import ExpenseRow from "../Expenses/ExpenseRow"
import { MdOutlineDescription } from "react-icons/md"
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
            .then(trip => trip.data.result.expenses.length > 0 ? setExpensesList(trip.data.result.expenses) : setExpensesList())
            .catch(err => console.log(err))

    }

    function fireFinalActions() {
        setShowModal(false)
        getTripExpenses()
    }

    function createModal() {
        setShowModal(true)
    }

    function deleteTripExpense(e) {

        const { value } = e.target

        tripServices
            .deleteExpense(id, value)
            .then(() => getTripExpenses())
            .catch(err => console.log(err))

    }

    return (
        <div className="ListExpenses">
            <Container className="mb-5">
                {
                    expensesList ?
                        <div>
                            <AddButton pageName='gastos' createModal={createModal} />
                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton />

                                <Modal.Body>
                                    <NewExpensesForm fireFinalActions={fireFinalActions} />
                                </Modal.Body>
                            </Modal>
                            {
                                expensesList.map((elm, id) => {
                                    return (
                                        <>
                                            <ExpenseRow key={id} expense={elm} deleteTripExpense={deleteTripExpense} />
                                        </>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="noExpenses">

                            <NoExpenses createModal={createModal} />

                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Header closeButton />
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
