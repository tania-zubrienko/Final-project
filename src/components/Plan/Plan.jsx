import { MdOutlineCalendarToday } from 'react-icons/md'
import './Plan.css'
import shortDate from '../../utils/shortDate.utils'


const Plan = ({ dates }) => {

    return (
        <div className='Plan'>
            <div className='slider'>
                <div className='icon'>
                    <h5> <MdOutlineCalendarToday /></h5>
                </div>
                {dates.map(e => {
                    console.log(e)
                    return (

                        <div className='fecha'>
                            <h5>
                                {shortDate(new Date(Date.parse(e)))}
                            </h5>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Plan