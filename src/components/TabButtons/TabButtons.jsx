import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineDirectionsBusFilled, MdOutlineRestaurant, MdOutlineTrain, MdFlight } from 'react-icons/md'
import { IoTicketOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5'
import { VscClearAll } from "react-icons/vsc";
import './TabsButtons.css'

const TabButtons = ({ filterByType }) => {

    const buttons = [
        {
            icono: <VscClearAll className='image' />,
            name: 'Todo',
            type: 'Todo'
        }, {
            icono: <IoBedOutline className='image' />,
            name: 'Hotel',
            type: 'Hotel'
        },
        {
            icono: <MdFlight className='image' />,
            name: 'Avión',
            type: 'Avión'
        },
        {
            icono: <MdOutlineTrain className='image' />,
            name: 'Tren',
            type: 'Tren'
        },
        {
            icono: <MdOutlineDirectionsBusFilled className='image' values='' />,
            name: 'Bus',
            type: 'Bus'
        },
        {
            icono: <IoTicketOutline className='image' />,
            name: 'Entradas',
            type: 'Entradas'
        }
    ]

    return (
        <Container>

            <Row>
                {
                    buttons.map(elm => {
                        return (

                            <Col className='filters' key={elm.name}>
                                
                                <button onClick={filterByType} value={elm.type}>
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