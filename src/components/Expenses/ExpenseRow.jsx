import { Col, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"

const ExpenseRow = ({ expense, deleteTripExpense }) => {
    return (
        <Row className="mt-5 mb-3">
            <Col sm={{ offset: 1, span: 3 }} className="d-flex">
                <h5><MdOutlineDescription className="imagenList" />{expense.concept}</h5>
            </Col>
            <Col sm={{ offset: 2, span: 3 }}>
                <h5>{expense.cost} €</h5>
            </Col>
            <Col sm={{ span: 3 }}>
                <button value={expense._id} onClick={deleteTripExpense} className="delete"></button>
            </Col>
        </Row>
    )
}

export default ExpenseRow