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

const TripDetail = () => {

    const { id } = useParams()

    const [currentTrip, setCurrentTrip] = useState()
    const [dates, setDates] = useState([])
    const [myPlans, setMyPlans] = useState([])
    const [key, setKey] = useState('overview');


    useEffect(() => {
        getTripInfo()
    }, [])

    function getTripInfo() {

        console.log("ENTRO")

        tripServices
            .getTripById(id)
            .then(res => {
                setCurrentTrip(res.data.result)
                setDates(getDatesArray(res.data.result.startDate, res.data.result.endDate))
                setMyPlans(res.data.result.placesOfInterest)
            })
            .catch(err => console.log(err))
    }

    // function savePlan(planId, planName) {

    //     tripServices
    //         .addPlantoTrip(id, { planId, planName })
    //         .then(getTripInfo())
    //         .catch(err => console.log(err))
    // }

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
                    <Recomendations refresh={getTripInfo} />
                </Tab>

                <Tab eventKey="reservas" title="Reservas" className='tab'>
                    <BookingsTab dates={dates} id={id}></BookingsTab>
                </Tab>

                <Tab eventKey="planes" title="Planes" className='tab'>
                    {/* <TripDates dates={dates} /> */}
                    <SearchPlanBar tripId={id} refresh={getTripInfo} dates={dates} />
                    <Plan myPlans={myPlans} refresh={getTripInfo} dates={dates} id={id} />
                    <Recomendations refresh={getTripInfo} />
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