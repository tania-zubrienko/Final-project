import { Container, Row, Col } from "react-bootstrap"
import NewBookingForm from "./../../components/Forms/NewBookingForm/NewBookingForm"

const NewBookingPage = () => {

    return (

        <Container>

            <Row className="mt-5">

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Nuevo Booking</h1>

                    <hr className="mb-5" />

                    <NewBookingForm />

                </Col>
            </Row>

        </Container>

    )

}

export default NewBookingPage