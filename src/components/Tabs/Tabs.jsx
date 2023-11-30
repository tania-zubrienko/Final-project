import { Nav, Tab, TabContainer } from 'react-bootstrap'
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpg'
import { useEffect, useState } from 'react'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import TabButtons from '../../components/TabButtons/TabButtons'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'
import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'
import NoTrips from '../../components/NoListed/NoTrips'
import NoBookings from '../../components/NoListed/NoBookings'
import HeaderExpenses from '../../components/Expenses/HeaderExpenses'
import BodyExpenses from '../../components/Expenses/BodyExpenses'
import FooterExpenses from '../../components/Expenses/FooterExpenses'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'
import './Tabs.css'

const Tabs = ({ id }) => {

    console.log(id)

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
        console.log(getDatesArray(dates.startDate, dates.endDate))
    }, [dates])

    return (
        <div className='Tab'>

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
                    <Tab.Pane defaultActiveKey="overview" eventKey="overview">
                        <Plan dates={dates} />
                        <TabButtons />
                        <BookedDropdowns id={id} />
                        <NotBookedDropdowns />
                        <PlanCard />
                        <NoTrips />
                        <NoBookings />
                        <HeaderExpenses />
                        <BodyExpenses />
                        <FooterExpenses />
                    </Tab.Pane>
                    <Tab.Pane eventKey="bookings">
                        <BookedDropdowns id={id} />
                        <NotBookedDropdowns />
                    </Tab.Pane>
                    <Tab.Pane eventKey="plan">
                        <Plan dates={dates} />
                        <PlanCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="expenses">
                        <HeaderExpenses />
                        <BodyExpenses />
                        <FooterExpenses />
                    </Tab.Pane>
                    <Tab.Pane eventKey="info">Info</Tab.Pane>
                </Tab.Content>





            </TabContainer>

        </div>
    )

}

export default Tabs