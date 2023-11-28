import TabButtons from '../../components/TabButtons/TabButtons'
import Tabs from './../../components/Tabs/Tabs'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'

const TripDetail = () => {

    return (
        <div className="TripDetail">
            <Tabs />
            <TabButtons />
            <BookedDropdowns />
            <NotBookedDropdowns />
        </div>
    )

}

export default TripDetail