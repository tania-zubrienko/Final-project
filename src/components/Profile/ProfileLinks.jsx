import { Col, Container, Row } from "react-bootstrap"
import { MdOutlineNavigateNext } from "react-icons/md"
import './ProfileLinks.css'

const ProfileLinks = () => {

    return (
        <div className="ProfileLinks">
            <Container>
                <Row md={{ offset: 3, span: 4 }}>
                    <hr />
                    <Col md={{ span: 3 }}>
                        <h3>Mis Documentos</h3>
                    </Col>
                    <Col md={{ offset: 8, span: 1 }}>
                        <h3><MdOutlineNavigateNext /></h3>
                    </Col>
                    <br />
                </Row>
                <Row md={{ offset: 3, span: 6 }}>
                    <hr />
                    <Col md={{ span: 3 }}>
                        <h3>Mis Viajes</h3>
                    </Col>
                    <Col md={{ offset: 8, span: 1 }}>
                        <h3><MdOutlineNavigateNext /></h3>
                    </Col>
                </Row>
                <Row md={{ offset: 3, span: 6 }}>
                    <hr />
                    <Col md={{ span: 3 }}>
                        <h3>Login y Seguridad</h3>
                    </Col>
                    <Col md={{ offset: 8, span: 1 }}>
                        <h3><MdOutlineNavigateNext /></h3>
                    </Col>
                </Row>
                <Row md={{ offset: 3, span: 6 }}>
                    <hr />
                    <Col md={{ span: 3 }}>
                        <h3>Accesibilidad</h3>
                    </Col>
                    <Col md={{ offset: 8, span: 1 }}>
                        <h3><MdOutlineNavigateNext /></h3>
                    </Col>
                </Row>
                <Row md={{ offset: 3, span: 6 }}>
                    <hr />
                    <Col md={{ span: 3 }}>
                        <h3>Notificaciones</h3>
                    </Col>
                    <Col md={{ offset: 8, span: 1 }}>
                        <h3><MdOutlineNavigateNext style={{ backgroundColor: '' }} /></h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default ProfileLinks