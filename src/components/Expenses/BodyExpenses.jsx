import { Col, Form, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"
import { LuEuro } from "react-icons/lu"
import './HeaderExpenses.css'

const BodyExpenses = ({ expenseInfo, addExpenseInfo }) => {

    function handleInputOnChange(event) {
        const { value, name } = event.target
        addExpenseInfo({ ...expenseInfo, [name]: value })
    }

    return (

        <div className="BodyExpenses">

            <Form.Group>
                <Row>
                    <Col xs={{ span: 1 }}>
                        <MdOutlineDescription className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="text" placeholder="Descripción del pago" name="concept" onChange={handleInputOnChange} value={expenseInfo.concept} />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 1 }}>
                        <LuEuro className="imagen" />
                    </Col>
                    <Col xs={{ span: 6 }}>
                        <input type="number" name="cost" onChange={handleInputOnChange} value={expenseInfo.cost} />
                    </Col>
                </Row>
            </Form.Group>

        </div>
    )
}

export default BodyExpenses