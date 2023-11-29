import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import './SavedPlanRow.css'

const SavedPlanRow = () => {
    return (

        <Link to={'/viajes/:id/planes/:id/detalle'}>
            <Row className='align-items-center'>
                <Col xs={1}>
                    <IoLocationOutline className='icon' />
                </Col>
                <Col xs={10} sm={9}>
                    <h5>Chapultepec Castle</h5>
                    <p>9AM  - 5PM Monday closed. 4,51€.</p>
                </Col>
                <Col sm={2}>
                    <img className='plan-img' src={cabeceraProvisional} alt='' />
                </Col>
            </Row>
        </Link>
    )
}

export default SavedPlanRow