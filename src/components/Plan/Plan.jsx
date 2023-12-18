import { Accordion, Row } from 'react-bootstrap'
import './Plan.css'
import SavedPlanRow from '../SavedPlanRow/SavedPlanRow'
import TripDates from '../TripDates/TripDates'
import { useEffect, useState } from 'react'
import planService from '../../services/plan.services'
import formatDate from '../../utils/date-utils'

const Plan = ({ myPlans, refresh, dates, id }) => {

    const [searchDate, setSearchDate] = useState()
    const [planData, setPlanData] = useState(myPlans)
    //no refresca l apagina a porque a los componentes hijios no llega actualizacion de planes del padre.
    useEffect(() => {
        refresh()
        planService
            .filterPlans(id, searchDate)
            .then(({ data }) => {
                setPlanData(data)
                refresh()
            })
            .catch(err => console.log(err))
        refresh()
    }, [searchDate])

    function filterByDay(e) {
        if (e.target.value !== undefined && e.target.value !== 'Todo') {
            setSearchDate(formatDate(new Date(e.target.value)))
        }
        else {
            setSearchDate(undefined)
            setPlanData(myPlans)
        }
    }
    // TODO: REVISAR LAYOUT DE BOOTSTRAP
    return (
        <>
            <TripDates dates={dates} filterByDay={filterByDay} />
            <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                <Accordion className='header' >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header ><h3>Sitios guardados</h3></Accordion.Header>
                        <Accordion.Body>
                            <SavedPlanRow myPlans={planData} refresh={refresh} dates={dates} id={id} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </>
    )
}
export default Plan