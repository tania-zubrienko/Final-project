import { Container, Row, Col } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa6"
import './NoListed.css'
import imagen from './../../assets/NoExpenses.png'

const NoBookings = () => {

    return (
        <div className="NoBookings mt-5 mb-5">
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }} style={{ color: "#001e3d", textAlign: "center", border: ".5vh solid #001e3d", borderRadius: "20px" }}>
                        <figure>
                            <img src={imagen} alt="" />
                        </figure>
                        <h1>No expenses here... yet!</h1>
                        <p>Tap the plus button below to add a expense with the group</p>
                        <div className="button mb-5">
                            <h3><FaPlus /></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NoBookings