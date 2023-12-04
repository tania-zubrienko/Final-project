import TabButtons from '../../components/TabButtons/TabButtons'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'
import Plan from '../../components/Plan/Plan'
import Recomendations from '../../components/Recomendations/Recomendations'
import NoTrips from '../../components/NoListed/NoTrips'
import ListExpenses from '../../components/ListExpenses/ListExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'
import { Tab, Tabs } from 'react-bootstrap'
import './TripDetail.css'
import Participants from '../../components/Participants/Participants'
import searchDetailsService from '../../../../Trip-Planner-back/services/searchDetails.services'


const TripDetail = () => {

    const { id } = useParams()

    const [currentTrip, setCurrentTrip] = useState()
    const [dates, setDates] = useState([])
    const [activeTab, setActiveTab] = useState("overview")
    const [myPlans, setMyPlans] = useState([])
    const [chosenPlan, setChosenPlan] = useState({})

    useEffect(() => {
        getTripInfo()
    }, [])

    const getTripInfo = () => {
        tripServices
            .getTripById(id)
            .then(res => {
                setCurrentTrip(res.data.result)
                setDates(getDatesArray(res.data.result.startDate, res.data.result.endDate))
            })
            .catch(err => console.log(err))
    }

    const savePlan = (planId) => {
        tripServices
            .addPlantoTrip(id, planId)
            .then(() => console.log())
            .catch()
    }



    useEffect(() => {
    }, [dates])
    const [key, setKey] = useState('overview');
    return (
        <div className="TripDetail">
            <div className='header'>
                {currentTrip && <img src={currentTrip.tripImage} alt={currentTrip.destination} />}
            </div>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
            >
                <Tab eventKey="overview" title="Detalles de viaje" className='tab'>

                    {currentTrip && <Participants participants={currentTrip.participants} />}
                    <Recomendations savePlan={savePlan} />
                </Tab>
                <Tab eventKey="reservas" title="Reservas" className='tab'>
                    <TabButtons />
                    <BookedDropdowns id={id} />
                    <NotBookedDropdowns />
                </Tab>
                <Tab eventKey="planes" title="Planes" className='tab'>
                    <Plan dates={dates} myPlans={myPlans} />
                    <Recomendations savePlan={savePlan} />
                </Tab>
                <Tab eventKey="gastos" title="Gastos" className='tab'>
                    <ListExpenses />
                </Tab>
                <Tab eventKey="info" title="Información" className='tab'>
                </Tab>
            </Tabs>
        </div >
    )
}

export default TripDetail