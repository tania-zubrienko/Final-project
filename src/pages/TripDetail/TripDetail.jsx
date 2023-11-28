import TabButtons from '../../components/TabButtons/TabButtons'
import Tabs from './../../components/Tabs/Tabs'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'

import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'


const TripDetail = () => {

    return (
        <div className="TripDetail">
            <Tabs />
            <Plan />
            <TabButtons />
            <BookedDropdowns />
            <NotBookedDropdowns />
            <PlanCard />

        </div>
    )

}

export default TripDetail