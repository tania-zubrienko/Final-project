import { Col, Container, Row } from 'react-bootstrap'
import { IoLocationOutline, IoEarthOutline, IoDocumentOutline } from "react-icons/io5"
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go"
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import './PlanDetails.css'
import { Link, useParams } from 'react-router-dom'
import tripServices from '../../services/trips.services';
import { useEffect, useState } from 'react';
import planService from '../../services/plan.services';
import shortDate from '../../utils/shortDate';

const PlanDetails = ({ placeInfo, currentId }) => {

    const { id } = useParams()
    const [date, setDate] = useState()

    useEffect(() => getSavedDate(currentId), [])

    function getSavedDate(currentId) {
        planService
            .getPlanDate(id, currentId)
            .then(({ data }) => {
                const planDate = shortDate(new Date(data[0].date))
                planDate === "NaN/NaN" ? setDate("No hay fecha") : setDate(planDate)
            })
            .catch(err => console.log(err))
    }
    return (
        placeInfo &&
        <Container>
            <h3 className='mt-3'>{placeInfo.name}</h3>
            {date &&
                <>
                    <span >Guardado para </span>
                    <span className='savedDate'>{date}</span>
                </>
            }
            <Row className='mt-4'>
                <Col md={{ offset: 1, span: 10 }}>
                    {placeInfo.img ? <img className='planImg' src={placeInfo.img} alt="" /> : <p style={{ fontStyle: 'italic', color: 'gray' }} className='text-center'>La foto no está disponible</p>}
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
                        <p>Rating: {placeInfo.rating ? placeInfo.rating : 'No hay valoraciones'}</p>
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
                        <Link to={placeInfo.website}><p>{placeInfo.website}</p></Link>
                    </Col>
                </Row>
            </Row>
        </Container >
    )
}

export default PlanDetails