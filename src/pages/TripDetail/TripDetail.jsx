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
import { Nav, TabContainer, Tab } from 'react-bootstrap'
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpeg'
import './TripDetail.css'


const TripDetail = () => {

    const { id } = useParams()

    const [dates, setDates] = useState([])
    const [activeTab, setActiveTab] = useState("overview")

    useEffect(() => {
        getTripDates()
    }, [])

    const getTripDates = () => {
        tripServices
            .getTripDates(id)
            .then(res => setDates(getDatesArray(res.data.startDate, res.data.endDate)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
    }, [dates])

    return (
        <div className="TripDetail">
            <div className='header'>
                <img src={cabeceraProvisional} alt='' />
            </div>
            <TabContainer>

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
                    <Tab.Pane eventKey="bookings">
                        <Plan dates={dates} />
                        <BookedDropdowns id={id} />
                        <NotBookedDropdowns />
                    </Tab.Pane>
                    <Tab.Pane eventKey="plan">
                        <Plan dates={dates} />
                        <PlanCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="expenses">
                        <ListExpenses />
                    </Tab.Pane>
                    <Tab.Pane eventKey="info">Info</Tab.Pane>
                </Tab.Content>


            </TabContainer>

        </div>
    )

}

export default TripDetail