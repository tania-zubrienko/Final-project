import SignupForm from "../../components/Forms/SignupForm/SignupForm"
import { Container, Row, Col } from 'react-bootstrap'

const SignupPage = () => {
    return (
        <div className="SignupPage">
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={{ span: 8 }}>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignupPage