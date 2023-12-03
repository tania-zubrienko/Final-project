import TabButtons from '../../components/TabButtons/TabButtons'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'
import Plan from '../../components/Plan/Plan'
import Recomendations from '../../components/Recomendations/Recomendations'
import ListExpenses from '../../components/ListExpenses/ListExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'
import { Tab, Tabs } from 'react-bootstrap'
import './TripDetail.css'
import Participants from '../../components/Participants/Participants'
import TripDates from '../../components/TripDates/TripDates'


const TripDetail = () => {

    const { id } = useParams()

    const [currentTrip, setCurrentTrip] = useState()
    const [dates, setDates] = useState([])

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
                    {currentTrip &&
                        <>
                            <h3>Destino: {currentTrip.destination}</h3>
                            <h3>Participantes: </h3>

                            {currentTrip && <Participants participants={currentTrip.participants} id={currentTrip._id} />}

                        </>
                    }
                    <Recomendations />
                </Tab>
                <Tab eventKey="reservas" title="Reservas" className='tab'>
                    <TripDates dates={dates} />
                    <TabButtons />
                    <BookedDropdowns id={id} />
                    <NotBookedDropdowns />
                </Tab>
                <Tab eventKey="planes" title="Planes" className='tab'>
                    <TripDates dates={dates} />
                    <Plan dates={dates} />
                    <Recomendations />
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