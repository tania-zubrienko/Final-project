import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineDirectionsCarFilled, MdOutlineDirectionsBusFilled, MdOutlineRestaurant, MdOutlineTrain, MdFlight } from 'react-icons/md'
import { GiDivingHelmet } from 'react-icons/gi'
import { FaFerry } from 'react-icons/fa6'
import { IoBedOutline } from 'react-icons/io5'
import './TabsButtons.css'

const TabButtons = () => {

    const buttons = [{
        icono: <IoBedOutline className='image' />,
        name: 'Lodging'
    },
    {
        icono: <MdOutlineDirectionsBusFilled className='image' />,
        name: 'Bus'
    }, {
        icono: <MdOutlineRestaurant className='image' />,
        name: 'Restaurant'
    }, {
        icono: <MdOutlineTrain className='image' />,
        name: 'Train'
    }, {
        icono: <MdOutlineDirectionsCarFilled className='image' />,
        name: 'Car Rental'
    }, {
        icono: <MdFlight className='image' />,
        name: 'Flight'
    }]

    return (
        <Container>
            <Row>
                {
                    buttons.map(elm => {
                        return (

                            <Col md={{ offset: 1, span: 3 }} className='mt-5' key={elm.name}>
                                <button>
                                    {elm.icono}
                                    <br />
                                    {elm.name}
                                </button>
                            </Col>
                        )
                    })
                }
                {/* <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <MdOutlineDirectionsBusFilled className='image' />
                        <br />
                        Bus
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <MdOutlineDirectionsCarFilled className='image' />
                        <br />
                        Car Rental
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <GiDivingHelmet className='image' />
                        <br />
                        Diving
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <MdOutlineRestaurant className='image' />
                        <br />
                        Restaurant
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <FaFerry className='image' />
                        <br />
                        Ferry
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5' style={{ borderRadius: '5px' }}>
                    <button>
                        <MdOutlineTrain className='image' />
                        <br />
                        Train
                    </button>
                </Col>
                <Col md={{ offset: 1, span: 2 }} className='mt-5'>
                    <button>
                        <MdFlight className='image' />
                        <br />
                        Flights
                    </button>
                </Col> */}
            </Row>
        </Container>

    )

}

export default TabButtons