import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa6"
import './NoListed.css'
import imagen from './../../assets/NoExpenses.png'

const NoBookings = ({ createModal }) => {

    return (
        <div className="NoBookings mt-5 mb-5">
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }} style={{ color: "#001e3d", textAlign: "center", border: ".5vh solid #001e3d", borderRadius: "20px" }}>
                        <figure>
                            <img src={imagen} alt="no expenses" />
                        </figure>
                        <h3>Todavía nada por aquí!</h3>
                        <p>Añadir registro de gastos</p>
                        <div className="button mt-3 mb-5" onClick={createModal}>
                            <h3><FaPlus /></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NoBookings