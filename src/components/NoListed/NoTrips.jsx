import { Container, Row, Col } from "react-bootstrap"
import './NoListed.css'
import imagen from './../../assets/NoTrips.png'
import { Link } from "react-router-dom"

const NoTrips = () => {

    return (
        <div className="NoTrips mt-5 mb-5">
            <Container>
                <Row >
                    <Col md={{ offset: 3, span: 6 }} className="card">
                        <figure>
                            <img src={imagen} alt="no trips" />
                        </figure>
                        <h3>No tienes viajes pendientes...todavía!</h3>
                        <p>Empieza a planificar tu siguiente aventura!</p>
                        <div className="button mt-3 mb-2">
                            <Link to="/viajes/crear"><h6>Añadir viaje</h6></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default NoTrips
