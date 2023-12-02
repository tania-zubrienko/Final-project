import TabButtons from '../../components/TabButtons/TabButtons'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'
import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'
import NoTrips from '../../components/NoListed/NoTrips'
import ListExpenses from '../../components/ListExpenses/ListExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'
import { Nav, TabContainer, Tab, Tabs } from 'react-bootstrap'
import './TripDetail.css'


const TripDetail = () => {

    const { id } = useParams()

    const [currentTrip, setCurrentTrip] = useState()
    const [dates, setDates] = useState([])
    const [activeTab, setActiveTab] = useState("overview")

    useEffect(() => {
        // getTripDates()
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
            {/* <TabContainer>

                <Nav fill variant="tabs" defaultActiveKey="overview" activeKey={activeTab} onSelect={setActiveTab} >
                    <Nav.Item>
                        <Nav.Link eventKey="overview" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bookings" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Booking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="plan" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Plan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="expenses" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Expenses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="info" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Inform</Nav.Link>
                    </Nav.Item>
                </Nav>


                <Tab.Content>
                    <Tab.Pane defaultactivekey="overview" eventKey="overview">
                        <TabButtons />
                        <BookedDropdowns id={id} />
                        <NotBookedDropdowns />
                        <PlanCard />
                        <NoTrips />
                        <ListExpenses />
                    </Tab.Pane>
                    <Tab.Pane eventKey="bookings"  >
                        <Plan dates={dates} />
                        <BookedDropdowns id={id} />
                        <NotBookedDropdowns />
                    </Tab.Pane>
                    <Tab.Pane eventKey="plan">
                        <Plan dates={dates} />
                        <PlanCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="expenses" >
                        <ListExpenses />
                    </Tab.Pane>
                    <Tab.Pane eventKey="info">Info</Tab.Pane>
                </Tab.Content>


            </TabContainer> */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
            >
                <Tab eventKey="overview" title="Detalles de viaje" className='tab'>
                    <TabButtons />
                    {/* <BookedDropdowns id={id} />
                    <NotBookedDropdowns /> */}
                    <PlanCard />
                    <NoTrips />
                    <ListExpenses />
                </Tab>
                <Tab eventKey="reservas" title="Reservas" className='tab'>
                    <Plan dates={dates} />
                    <BookedDropdowns id={id} />
                    <NotBookedDropdowns />
                </Tab>
                <Tab eventKey="planes" title="Planes" className='tab'>
                    <Plan dates={dates} />
                    <PlanCard />
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