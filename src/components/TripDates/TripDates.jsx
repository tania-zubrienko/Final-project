import shortDate from "../../utils/shortDate"
import './TripDates.css'
import { MdOutlineCalendarToday } from 'react-icons/md'
const TripDates = ({ dates, filterByDay }) => {

    function handleFilter(e) {
        console.log(e.target.value)
        filterByDay(e)
    }

    return (

        <div className='slider'>

            <button className="icon" onClick={filterByDay} value={undefined}> <MdOutlineCalendarToday /> </button>
            {
            dates.map(e => {
                return (
                    <button className='fecha' onClick={filterByDay} value={e} key={e}>
                        {shortDate(new Date(Date.parse(e)))}
                    </button>
                )
            })
            }

        </div >

    )
}

export default TripDates