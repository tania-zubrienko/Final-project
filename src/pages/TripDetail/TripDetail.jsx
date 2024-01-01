import './TripDetail.css'
import Plan from '../../components/Plan/Plan'
import Recomendations from '../../components/Recomendations/Recomendations'
import ListExpenses from '../../components/ListExpenses/ListExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'
import { Tab, Tabs } from 'react-bootstrap'
import Participants from '../../components/Participants/Participants'
import BookingsTab from '../../components/BookingsTab/BookingsTab'
import SearchPlanBar from '../../components/SearchPlanBar/SearchPlanBar'
import Information from '../../components/Information/Information'
import Carousel from 'react-bootstrap/Carousel';
import MapCard from '../../components/Cards/MapCard/MapCard'


const TripDetail = () => {

    const { id } = useParams()

    const [currentTrip, setCurrentTrip] = useState()
    const [defaultCords, setDefaultCords] = useState()
    const [dates, setDates] = useState([])
    const [myPlans, setMyPlans] = useState([])
    const [key, setKey] = useState('overview');


    useEffect(() => {
        getTripInfo()
    }, [])

    function getTripInfo() {

        tripServices
            .getTripById(id)
            .then(res => {
                console.log(res.data.result)
                setCurrentTrip(res.data.result)
                setDates(getDatesArray(res.data.result.startDate, res.data.result.endDate))
                setMyPlans(res.data.result.placesOfInterest)
                setDefaultCords({ lat: res.data.result.destinationCoords.lat, lng: res.data.result.destinationCoords.lng })
            })
            .catch(err => console.log(err))
    }



    return (
        currentTrip &&
        <div className="TripDetail">
            <div className='header'>

                <Carousel fade>
                    {currentTrip &&
                        currentTrip.tripImage.map((e, i) =>
                            <Carousel.Item interval={1500} key={i}>
                                <img src={e} alt={currentTrip.destination} />
                            </Carousel.Item>
                        )
                    }
                </Carousel>
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

                            {currentTrip && <Participants participants={currentTrip.participants} id={currentTrip._id} refresh={getTripInfo} />}
                        </>
                    }
                    {defaultCords && <MapCard dates={dates} defaultCords={defaultCords} plans={myPlans} />}
                </Tab>

                <Tab eventKey="reservas" title="Reservas" className='tab'>
                    <BookingsTab dates={dates} id={id}></BookingsTab>
                </Tab>

                <Tab eventKey="planes" title="Planes" className='tab'>
                    <SearchPlanBar tripId={id} refresh={getTripInfo} dates={dates} />
                    <Plan myPlans={myPlans} refresh={getTripInfo} dates={dates} id={id} />
                    <Recomendations refresh={getTripInfo} dates={dates} />
                </Tab>

                <Tab eventKey="gastos" title="Gastos" className='tab'>
                    <ListExpenses />
                </Tab>

                <Tab eventKey="info" title="Información" className='tab'>
                    <Information />
                </Tab>
            </Tabs>
        </div >
    )
}

export default TripDetail