import { Col, Container, Row } from 'react-bootstrap'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import { IoLocationOutline, IoHourglassOutline, IoEarthOutline, IoDocumentOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { LuEuro } from "react-icons/lu"
import './PlanDetails.css'

const PlanDetails = () => {
    return (
        <Container>
            <h3 className='mt-4'>Chapultepec Castle</h3>
            <Row className='mt-4'>
                <Col>
                    <img src={cabeceraProvisional} alt="" />
                </Col>
                <Col>
                    <Row>
                        <Col md={2} lg={1}>
                            <IoLocationOutline className='icon' />
                        </Col>
                        <Col>
                            <p>Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Mexico City, Mexico</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} lg={1}>
                            <GoClock className='icon' />
                        </Col>
                        <Col>
                            <p>9AM  - 5PM Monday closed</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} lg={1}>
                            <IoHourglassOutline className='icon' />
                        </Col>
                        <Col>
                            <p>People typically spend 3 hr here</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} lg={1}>
                            <IoEarthOutline className='icon' />
                        </Col>
                        <Col>
                            <p>https://mnh.inah.gob.mx/</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} lg={1}>
                            <LuEuro className='icon' />
                        </Col>
                        <Col>
                            <p>4,51€* The prices could be change</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} lg={1}>
                            <IoDocumentOutline className='icon' />
                        </Col>
                        <Col>
                            <p>Tickets cannot be purchased in advance</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PlanDetails