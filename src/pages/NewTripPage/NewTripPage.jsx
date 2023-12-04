import { Container, Row, Col } from "react-bootstrap"
import NewTripForm from "../../components/Forms/NewTripForm/NewTripForm"


const NewTripPage = () => {

    return (

        <Container>

            <Row className="mt-5">

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Nuevo Viaje</h1>

                    <hr className="mb-5" />

                    <NewTripForm />

                </Col>
            </Row>

        </Container>
    )

}

export default NewTripPage