
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={{ span: 8 }}>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage