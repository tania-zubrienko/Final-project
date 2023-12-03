import './Plan.css'
import { Accordion, Row } from 'react-bootstrap'
import SavedPlanRow from '../SavedPlanRow/SavedPlanRow'


const Plan = ({ dates }) => {
    return (
        <div className='Plan'>
            <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Saved to the Plan</h3></Accordion.Header>
                        <Accordion.Body>
                            <SavedPlanRow />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </div>
    )
}
export default Plan