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
            </Row>
        </Container>

    )

}

export default TabButtons