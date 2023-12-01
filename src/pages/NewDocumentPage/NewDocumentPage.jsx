import { Container, Row, Col } from "react-bootstrap"
import NewDocumentForm from "./../../components/Forms/DocumentsForm/DocumentsForm"

const NewDocumentPage = () => {

    return (

        <Container>

            <Row className="mt-5">

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Nuevo Documento</h1>

                    <hr className="mb-5" />

                    <NewDocumentForm />

                </Col>
            </Row>

        </Container>

    )

}

export default NewDocumentPage