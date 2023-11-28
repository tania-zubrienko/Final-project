import { Container, Row, Col } from "react-bootstrap"
import { MdOutlineDirectionsCarFilled, MdOutlineDirectionsBusFilled, MdOutlineRestaurant, MdOutlineTrain, MdFlight } from "react-icons/md";
import { GiDivingHelmet } from "react-icons/gi";
import { FaFerry } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5"
import './TabsButtons.css'

const TabButtons = () => {

    return (
        <Container>
            <Row>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <IoBedOutline className="image" />
                        <br />
                        Lodging
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <MdOutlineDirectionsBusFilled className="image" />
                        <br />
                        Bus
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <MdOutlineDirectionsCarFilled className="image" />
                        <br />
                        Car Rental
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <GiDivingHelmet className="image" />
                        <br />
                        Diving
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <MdOutlineRestaurant className="image" />
                        <br />
                        Restaurant
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <FaFerry className="image" />
                        <br />
                        Ferry
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <MdOutlineTrain className="image" />
                        <br />
                        Train
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className="mt-5">
                    <button>
                        <MdFlight className="image" />
                        <br />
                        Flights
                    </button>
                </Col>
            </Row>
        </Container>

    )

}

export default TabButtons