import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './AddButton.css'

const AddButton = ({ pageName, createModal }) => {

    return (
        <div className="AddButton">
            <Container className="mt-5">
                <Row>
                    <Col md={{ offset: 4, span: 4 }}>
                        <div className="add" onClick={createModal}>
                            <h3>Añadir {pageName}</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddButton