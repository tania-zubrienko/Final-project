import { Col, Container, Row } from 'react-bootstrap'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import { IoLocationOutline, IoHourglassOutline, IoEarthOutline, IoDocumentOutline } from "react-icons/io5"
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go"
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import './PlanDetails.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import placeServices from '../../services/places.services';

const PlanDetails = ({ placeInfo }) => {
    console.log(placeInfo)

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
                        <p>Horario habitual: {placeInfo.hours[0]}</p>
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
                        <Link to={placeInfo.url}>Como llegar</Link>
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