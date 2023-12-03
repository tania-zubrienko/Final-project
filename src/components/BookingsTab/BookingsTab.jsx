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

const BookingsTab = ({ dates, id }) => {
    const [searchDate, setSearchDate] = useState()
    const [booked, setBooked] = useState([])

    useEffect(() => {
        console.log('fecha', searchDate)
        bookingService
            .filterBookingByDay(id, { bookingDate: searchDate })
            .then(({ data }) => {
                setBooked(data)
            })
            .catch(err => console.log(err))
    }, [searchDate])

    function filterByDay(e) {
        setSearchDate(formatDate(new Date(e.target.value)))
    }

    return (
        <div>
            {
                dates.map(e => {
                    return (
                        <Button className='fecha' variant="outline-secondary" onClick={filterByDay} value={e} key={e}>
                            {shortDate(new Date(Date.parse(e)))}
                        </Button>
                    )
                })
            }
            <TabButtons />
            <div className="Dropdown">


                <Container className="mt-5">
                    <Link to={`/viajes/reservas/${id}/crear`}><div className="btnAdd"><h3><FaPlus /></h3></div></Link>

                    <br />
                    <h1 style={{ color: '#011e3d' }}>Booked</h1>
                    <hr />


                    <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Flights</h3></Accordion.Header>
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
            <NotBookedDropdowns />
        </div>
    )
}

export default BookingsTab