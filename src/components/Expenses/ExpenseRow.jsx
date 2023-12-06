import { Col, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"

const ExpenseRow = ({ expense }) => {
    return (
        <Row className="mt-5 mb-3">
            <Col sm={{ offset: 3, span: 3 }} className="d-flex">
                <h5><MdOutlineDescription className="imagenList" />{expense.concept}</h5>
            </Col>
            <Col sm={{ offset: 2, span: 3 }}>
                <h5>{expense.cost} €</h5>
            </Col>
        </Row>
    )
}

export default ExpenseRow