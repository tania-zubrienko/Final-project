import { useEffect, useState } from "react"
import NoExpenses from '../NoListed/NoExpenses'
import NewExpensesForm from '../Forms/NewExpensesForm/NewExpensesForm'
import { useParams } from "react-router-dom"
import tripServices from "../../services/trips.services"
import { Modal, Container, Row, Col } from "react-bootstrap"
import AddButton from "../Button/AddButton"
import { MdOutlineDescription } from "react-icons/md"
import { LuEuro } from "react-icons/lu"

import './ListExpenses.css'
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
            .then(trip => trip.data.result.expenses.length > 0 && setExpensesList(trip.data.result.expenses))
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
                                        // TODO: DESACOPLAR A EXPENSEROW
                                        <Row key={id} className="mt-5 mb-3">
                                            <Col sm={{ offset: 3, span: 3 }} className="d-flex">
                                                <h5><MdOutlineDescription className="imagenList" />{elm.concept}</h5>
                                            </Col>
                                            <Col sm={{ offset: 2, span: 3 }}>
                                                <h5>{elm.cost} €</h5>
                                            </Col>
                                        </Row>
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