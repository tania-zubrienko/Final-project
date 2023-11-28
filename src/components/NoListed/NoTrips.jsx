import { Container, Row, Col } from "react-bootstrap"
import './NoListed.css'
import imagen from './../../assets/NoTrips.png'

const NoTrips = () => {

    return (
        <div className="NoTrips mt-5 mb-5">
            <Container>
                <Row >
                    <Col md={{ offset: 3, span: 6 }} style={{ color: "#001e3d", textAlign: "center", border: ".5vh solid #001e3d", borderRadius: "20px" }}>
                        <figure>
                            <img src={imagen} alt="" />
                        </figure>
                        <h1>No trips booked... yet!</h1>
                        <p>Time to dust off your bags and start planning your next adventure</p>
                        <div className="button mb-5">
                            <h3>Start Planing</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default NoTrips
