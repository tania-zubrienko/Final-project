import { Accordion, Row } from 'react-bootstrap'
import './Plan.css'
import { MdOutlineCalendarToday } from 'react-icons/md'

import shortDate from '../../utils/shortDate'
import SavedPlanRow from '../SavedPlanRow/SavedPlanRow'


const Plan = ({ dates }) => {
    return (
        <div className='Plan'>
            <div className='slider'>
                <div className='icon'>
                    <h5> <MdOutlineCalendarToday /></h5>
                </div>
                {dates.map(e => {

                    return (
                        <div className='fecha' key={e}>
                            <h5>
                                {shortDate(new Date(Date.parse(e)))}
                            </h5>
                        </div>
                    )

                })}
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
        </div >
    )
}
export default Plan