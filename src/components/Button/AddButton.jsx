import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './AddButton.css'

const AddButton = ({ pageName, createModal }) => {

    return (
        <div className="AddButton">

            <Row className="mt-5">
                <Col md={{ offset: 4, span: 4 }}>
                    <div className="add" onClick={createModal}>
                        <h3>Añadir {pageName}</h3>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddButton