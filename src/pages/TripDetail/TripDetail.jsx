import TabButtons from '../../components/TabButtons/TabButtons'
import Tabs from './../../components/Tabs/Tabs'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'

import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'
import NoTrips from '../../components/NoListed/NoTrips'
import NoBookings from '../../components/NoListed/NoBookings'
import HeaderExpenses from '../../components/Expenses/HeaderExpenses'
import BodyExpenses from '../../components/Expenses/BodyExpenses'
import FooterExpenses from '../../components/Expenses/FooterExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'


const TripDetail = () => {
    const { id } = useParams()

    const [dates, setDates] = useState([])


    useEffect(() => { getTripDates() }, [])

    const getTripDates = () => {
        tripServices
            .getTripDates(id)
            .then(res => setDates(getDatesArray(res.data.startDate, res.data.endDate)))
            .catch(err => console.log(err))
    }

    return (
        <div className="TripDetail">
            <Tabs />
            <Plan dates={dates} />
            <TabButtons />
            <BookedDropdowns />
            <NotBookedDropdowns />
            <PlanCard />
            <NoTrips />
            <NoBookings />
            <HeaderExpenses />
            <BodyExpenses />
            <FooterExpenses />
        </div>
    )

}

export default TripDetail