import { Container, Row, Col, Accordion } from "react-bootstrap"
import './PlanCard.css'
import image from './../../assets/cabeceraProvisional.jpeg'
import SavedPlanRow from "../SavedPlanRow/SavedPlanRow"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import SearchPlanBar from "../SearchPlanBar/SearchPlanBar"


const PlanCard = () => {
    //console.log(useParams.id)
    const { id } = useParams()
    const [state, setState] = useState(false)
    const [planSearch, setPlanSearch] = useState("")
    const [plans, setPlans] = useState([])

    const fakePlans = [
        {
            name: "Juanda esto va por ti",
            rating: 2.3,
            distance: 6700,
            admision: '12:00-13:00',
            direction: "Casa de juanda numero 1"
        },
        {
            name: 'Museo del Pardo',
            rating: 5,
            distance: 600,
            admision: '09:00-21:00'
        },
        {
            name: 'Estadio de Santiago Bernabeu',
            rating: 100,
            distance: 600,
            admision: '09:00-21:00'
        },
        {
            name: 'Palacio del Pardo',
            rating: 5,
            distance: 600,
            admision: '09:00-21:00'
        },
        {
            name: 'El Retiro',
            rating: 3,
            distance: 600,
            admision: '09:00-21:00'
        },
        {
            name: 'Estadio de Butarque',
            rating: 6,
            distance: 600,
            admision: ''
        },
        {
            name: 'Ironhack',
            rating: 0.5,
            distance: 600,
            admision: '9:00-23:00'
        }
    ]

    //setPlans(fakePlans)

    console.log(id)

    const searchHandler = e => setUserSearch(e.target.value)


    const getList = () => {

        // planServices
        //     .getPlanList()
        //     .then(res => setPlans(res.data))
        //     .catch(err => console.log(err))

    }

    const handlerDeleteFriend = (e) => {
        console.log("ELIMINAR")
        const planId = e.target.value

        // planServices
        //     .deletePlan(planId)
        //     .then(getList())
        //     .catch(err => console.log(err))

        setState(!state)

    }

    useEffect(() => { getList() }, [state])


    return (

        <div className="PlanCard">
            <Container>

                <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Saved to the Plan</h3></Accordion.Header>
                            <Accordion.Body>
                                <SavedPlanRow />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

                <div className='inputField'>
                    <label>Plan:</label>
                    <input type='text' value={planSearch} onChange={searchHandler} placeholder='Plan' />
                </div>
                <SearchPlanBar planToFind={planSearch} plans={plans} handler={{ setState, state }} refresh={getList} />

                <h1 className="mt-5 mb-3">Do not miss it!</h1>


                {/* <Row className="mt-5">
                    <Col sm={12} md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col sm={12} md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div sm={6} className="button mt-3">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-3">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-3">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-3">Save to Plan</div>
                    </Col>
                </Row> */}
                {

                    fakePlans.map(elm => {

                        return (

                            < Row className="mt-5">
                                <Col sm={12} md={{ offset: 1, span: 5 }}>
                                    <h2>{elm.name}</h2>
                                    <h3 className="mt-3">{elm.name}</h3>
                                    <h5 className="mt-3">{elm.rating}</h5>
                                    <h5 className="mt-3">{elm.admision}</h5>
                                    <h5 className="mt-3">{elm.direction}</h5>
                                    <div sm={6} className="button mt-3">Save to Plan</div>
                                </Col>
                            </Row>
                        )
                    })
                }

            </Container>
        </div >
    )

}

export default PlanCard