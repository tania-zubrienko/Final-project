import { Col, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import './ProfileLinks.css'
import FriendList from "../FriendList/FriendList";
import Trips from './../../pages/Trips/Trips'

const ProfileLinks = () => {

    return (
        <div className="ProfileLinks">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Mis Documentos</Accordion.Header>
                            <Accordion.Body>
                                aqui los docs
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mis Viajes</Accordion.Header>
                            <Accordion.Body>
                                <Trips />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Mis Amigos</Accordion.Header>
                            <Accordion.Body>
                                <FriendList />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </div >
    )

}

export default ProfileLinks