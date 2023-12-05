import TabButtons from '../../components/TabButtons/TabButtons'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'
import shortDate from '../../utils/shortDate'
import { useEffect, useState } from 'react'
import { Accordion, Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6"
import Booked from '../Booked/Booked'
import bookingService from '../../services/booking.services'
import formatDate from '../../utils/date-utils'
import TripDates from '../TripDates/TripDates'

const BookingsTab = ({ dates, id }) => {
    const [searchDate, setSearchDate] = useState()
    const [searchType, setSearchType] = useState()
    const [booked, setBooked] = useState([])

    useEffect(() => {
        console.log('fecha', searchDate)
        console.log('tipo', searchType)
        bookingService
            .filterBooking(id, searchDate, searchType)
            .then(({ data }) => {
                console.log(data)
                setBooked(data)
            })
            .catch(err => console.log(err))
    }, [searchDate, searchType])

    function filterByDay(e) {
        if (e.target.value !== undefined) {
            setSearchDate(formatDate(new Date(e.target.value)))
        }
        else {
            setSearchDate(undefined)
        }
    }

    function filterByType(e) {
        console.log(e.target.value)
        if (e.target.value !== 'Todo') {
            setSearchType(e.target.value)
        }
        else {
            setSearchType(undefined)
        }
    }

    return (
        <div>
            <TripDates dates={dates} filterByDay={filterByDay} />
            <TabButtons filterByType={filterByType} />
            <div className="Dropdown">

                <Container className="mt-5">
                    <Link to={`/viajes/reservas/${id}/crear`}><div className="btnAdd"><h3><FaPlus /></h3></div></Link>


                    <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="bookingsHeader"><h3>Reservas realizadas</h3></Accordion.Header>
                                <Accordion.Body>
                                    {
                                        booked.length > 0 && booked.map((book) => {
                                            return (
                                                book && <Booked key={book.name} booked={book} />
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>

                </Container>
            </div>
            {/* <NotBookedDropdowns /> */}
        </div>
    )
}

export default BookingsTab