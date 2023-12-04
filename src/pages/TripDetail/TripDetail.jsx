import TabButtons from '../../components/TabButtons/TabButtons'
import Tabs from './../../components/Tabs/Tabs'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'

import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'
import NoTrips from '../../components/NoListed/NoTrips'
import NoExpenses from '../../components/NoListed/NoExpenses'
import HeaderExpenses from '../../components/Expenses/HeaderExpenses'
import BodyExpenses from '../../components/Expenses/BodyExpenses'
import FooterExpenses from '../../components/Expenses/FooterExpenses'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import tripServices from '../../services/trips.services'
import getDatesArray from '../../utils/dateArray.utils'


const TripDetail = () => {
    const { id } = useParams()

    return (
        <div className="TripDetail">
            <Tabs id={id} />
        </div>
    )

}

export default TripDetail