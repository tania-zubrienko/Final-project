import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './AddButton.css'

const AddButton = () => {

    return (
        <div className="AddButton">
            <Container className="mt-5">
                <Row>
                    <Col md={{ offset: 4, span: 4 }}>
                        <Link to='/viajes/crear'>
                            <div className="add">
                                <h3>añadir viaje</h3>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddButton