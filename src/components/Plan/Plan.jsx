import { Accordion, Row } from 'react-bootstrap'
import './Plan.css'
import SavedPlanRow from '../SavedPlanRow/SavedPlanRow'

const Plan = ({ myPlans }) => {

    return (

        <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
            <Accordion className='header' >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header ><h3>Sitios guardados</h3></Accordion.Header>
                    <Accordion.Body>
                        <SavedPlanRow myPlans={myPlans} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
    )
}
export default Plan