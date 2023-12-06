import { Container, Row, Col } from 'react-bootstrap'
import './TabsButtons.css'
import { BUTTON_TYPE } from '../../const/buttonConst'

const TabButtons = ({ filterByType }) => {



    return (
        <Container>

            <Row>
                {
                    BUTTON_TYPE.map(elm => {
                        return (

                            <Col className='filters' key={elm.name}>

                                <button onClick={filterByType} value={elm.type} className={elm.type}>

                                </button>
                                <p>{elm.name}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>

    )

}

export default TabButtons