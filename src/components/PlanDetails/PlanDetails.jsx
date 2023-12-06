import { Col, Container, Row } from 'react-bootstrap'
import { IoLocationOutline, IoEarthOutline, IoDocumentOutline } from "react-icons/io5"
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go"
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import './PlanDetails.css'
import { Link, useParams } from 'react-router-dom'
import tripServices from '../../services/trips.services';

const PlanDetails = ({ placeInfo, currentId, refreshInfo }) => {

    const { id } = useParams()

    function deleteTripPlan(e) {
        const { value } = e.target
        const currentId = value

        tripServices
            .deletePlan(id, currentId)
            .then(() => refreshInfo())
            .catch(err => console.log(err))

    }

    return (
        placeInfo &&
        <Container>
            <h3 className='mt-3'>{placeInfo.name}</h3>
            <Row className='mt-4'>
                <Col md={{ offset: 1, span: 10 }}>
                    <img className='planImg' src={placeInfo.img} alt="" />
                </Col>
            </Row>
            <Row>
                <Row className='mb-3 mt-4'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <IoLocationOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>{placeInfo.formatted_address}</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <GoClock className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>Horario habitual: {placeInfo.hours == "Closed" ? "No hay información " : `${placeInfo.hours}`}</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <FaRegStar className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <p>Rating: {placeInfo.rating}</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }}>
                        <LiaMapMarkerAltSolid className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <Link to={placeInfo.url}>Ubicación</Link>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col md={{ offset: 1, span: 2 }} lg={{ offset: 1, span: 1 }} >
                        <IoEarthOutline className='icon' />
                    </Col>
                    <Col md={{ offset: 1, span: 8 }} lg={{ offset: 1, span: 9 }}>
                        <Link to={placeInfo.url}><p>{placeInfo.website}</p></Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 11 }}>
                        <button value={currentId} onClick={deleteTripPlan} className='deleteButton'></button>
                    </Col>
                </Row>
            </Row>
        </Container >
    )
}

export default PlanDetails