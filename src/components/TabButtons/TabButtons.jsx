import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineDirectionsBusFilled, MdOutlineRestaurant, MdOutlineTrain, MdFlight } from 'react-icons/md'
import { IoTicketOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5'
import { VscClearAll } from "react-icons/vsc";
import './TabsButtons.css'

const TabButtons = () => {

    const buttons = [
        {
            icono: <VscClearAll className='image' />,
            name: 'Todo'
        }, {
            icono: <IoBedOutline className='image' />,
            name: 'Hotel'
        },
        {
            icono: <MdFlight className='image' />,
            name: 'Avión'
        },
        {
            icono: <MdOutlineTrain className='image' />,
            name: 'Trén'
        },
        {
            icono: <MdOutlineDirectionsBusFilled className='image' />,
            name: 'Bus'
        }, {
            icono: <IoTicketOutline className='image' />,
            name: 'Entradas'
        }]

    return (
        <Container>

            <Row>
                {
                    buttons.map(elm => {
                        return (

                            <Col className='filters' key={elm.name}>
                                <button value={elm.name}>
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