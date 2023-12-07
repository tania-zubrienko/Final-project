import shortDate from "../../utils/shortDate"
import './TripDates.css'
import { MdOutlineCalendarToday } from 'react-icons/md'
const TripDates = ({ dates, filterByDay }) => {

    return (

        <div className='slider'>

            <button className="icon" onClick={filterByDay} value={'Todo'}> <MdOutlineCalendarToday /> </button>
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