import { Accordion, Row } from 'react-bootstrap'
import './Plan.css'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { useState, useEffect } from 'react'
import shortDate from '../../utils/shortDate'
import SavedPlanRow from '../SavedPlanRow/SavedPlanRow'
import tripServices from '../../services/trips.services'
import { useParams } from 'react-router-dom'
import searchDetailsService from './../../../../Trip-Planner-back/services/searchDetails.services'


const Plan = ({ dates }) => {

    const { id } = useParams()

    const [state, setState] = useState(false)
    const [planSearch, setPlanSearch] = useState('')
    const [myPlans, setMyPlans] = useState()
    const [plansId, setPlansId] = useState([])

    const searchHandler = e => setPlanSearch(e.target.value)


    const showPlans = () => {
        tripServices
            .getTripById(id)
            .then(({ data }) => {
                return data.result.placesOfInterest
            })
            .then(arrPlacesIdsTrip => {

                arrPlacesIdsTrip.map(elm => {
                    console.log("------", elm.placeId)
                    searchDetailsService
                        .getDetailsPlace()
                        .then(response => console.log("----------------------", response))
                        .catch(err => console.log(err))
                })

                // setPlansId(...plansId, elm.placeId)

            })
            .catch(err => console.log(err))
    }

    useEffect((() => {
        showPlans()
        console.log("estos son los ids", plansId)
    }), [])

    // const getList = () => {

    //     planServices
    //         .getPlanList()
    //         .then(res => setPlan(res.data))
    //         .catch(err => console.log(err))

    // }

    // const handlerDeletePlan = (e) => {
    //     console.log("ELIMINAR")
    //     const planId = e.target.value

    //     userServices
    //         .deletePlan(planId)
    //         .then(getList())
    //         .catch(err => console.log(err))

    //     setState(!state)

    // }

    // useEffect(() => { getList() }, [state])

    return (
        // <div className='Plan'>
        //     <div className='slider'>
        //         <div className='icon'>
        //             <h5> <MdOutlineCalendarToday /></h5>
        //         </div>
        //         {dates.map(e => {

        //             return (
        //                 <div className='fecha' key={e}>
        //                     <h5>
        //                         {shortDate(new Date(Date.parse(e)))}
        //                     </h5>
        //                 </div>
        //             )

        //         })}

        <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Saved to the Plan</h3></Accordion.Header>
                    <Accordion.Body>
                        <SavedPlanRow myPlans={myPlans} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
        //     </div>
        // </div >
    )
}
export default Plan