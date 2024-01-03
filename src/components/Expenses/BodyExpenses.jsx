import { Col, Form, Row } from "react-bootstrap"
import { MdOutlineDescription } from "react-icons/md"
import { LuEuro } from "react-icons/lu"
import './HeaderExpenses.css'
import { useEffect, useState } from "react"

const BodyExpenses = ({ expenseInfo, addExpenseInfo, friends }) => {

    function handleInputOnChange(event) {
        const { value, name } = event.target
        addExpenseInfo({ ...expenseInfo, [name]: value })
    }
    const [paidBy, setPaidBy] = useState('')
    useEffect(() => { }, [paidBy])

    function setPayer(e) {
        setPaidBy(e._id)
        addExpenseInfo({ ...expenseInfo, paidBy: e })
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
                    <h6 className="mt-5">Pagado por:</h6>
                    <Col className="members mt-1">
                        {friends.map(e => <img src={e.avatar} alt={e.id}
                            className="payerRow" key={e._id}
                            onClick={() => setPayer(e)}
                            style={{ border: paidBy === e._id && "2px solid red" }} />)}
                    </Col>
                </Row>
            </Form.Group>

        </div>
    )
}

export default BodyExpenses