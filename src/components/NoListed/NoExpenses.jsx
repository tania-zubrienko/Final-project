import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa6"
import './NoListed.css'
import imagen from './../../assets/NoExpenses.png'

const NoBookings = ({ createModal }) => {

    return (
        <div className="NoBookings mt-5 mb-5">

            <Row>
                <Col md={{ offset: 3, span: 6 }} className='card' >
                    <figure>
                        <img src={imagen} alt="no expenses" />
                    </figure>
                    <h3>Todavía nada por aquí!</h3>
                    <p>Añadir registro de gastos</p>
                    <button className="button mt-3 mb-2" onClick={createModal}>
                        <h3><FaPlus /></h3>
                    </button>
                </Col>
            </Row>

        </div>
    )
}

export default NoBookings