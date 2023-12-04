import shortDate from "../../utils/shortDate"
import './TripDates.css'
import { MdOutlineCalendarToday } from 'react-icons/md'
const TripDates = ({ dates }) => {

    return (

        <div className='slider'>

            <h5 className="icon"> <MdOutlineCalendarToday /></h5>
            {dates.map(e => {

                return (
                    <div className='fecha' key={e}>
                        <h5>{shortDate(new Date(Date.parse(e)))} </h5>
                    </div>
                )

            })}

        </div >

    )
}

export default TripDates