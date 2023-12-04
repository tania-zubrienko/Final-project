import { Col, Container, Row } from 'react-bootstrap'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import { IoLocationOutline, IoHourglassOutline, IoEarthOutline, IoDocumentOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { LuEuro } from "react-icons/lu"
import './PlanDetails.css'

const PlanDetails = () => {
    return (
        <Container>
            <h3 className='mt-3'>Chapultepec Castle</h3>
            <Row className='mt-4'>
                <Col md={{ offset: 1, span: 10 }}>
                    <img className='planImg' src={cabeceraProvisional} alt="" />
                </Col>
            </Row>
            <Row>
                <Row className='mb-3 mt-4'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <IoLocationOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Mexico City, Mexico</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <GoClock className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>9AM  - 5PM Monday closed</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <IoHourglassOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>People typically spend 3 hr here</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <IoEarthOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>https://mnh.inah.gob.mx/</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }} >
                        <LuEuro className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>4,51€* The prices could be change</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }} >
                        <IoDocumentOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>Tickets cannot be purchased in advance</p>
                    </Col>
                </Row>
            </Row>
        </Container >
    )
}

export default PlanDetails