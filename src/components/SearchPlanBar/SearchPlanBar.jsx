import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'


const SearchPlanBar = ({ planToFind, plans, handler, refresh }) => {

    const { state, setState } = handler
    const [foundPlans, setFoundPlans] = useState([])
    useEffect(() => { getPlan() }, [planToFind])

    const [planList, setPlanList] = useState(plans)

    function getPlan() {
        // planServices
        //     .getPlanData(planToFind)
        //     .then(result => setFoundPlans(result.data))
        //     .catch(err => console.log(err))
    }

    function handlerAddPlan(e) {
        const planId = e.target.value

        planServices
            .addPlan(planId)
            .then((res) => {
                setPlanList(...plans, res)
                refresh()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='SearchBar'>
            <Container>
                <h5>Listado de Planes</h5>
                {foundPlans.map(e => {
                    if (!plans.filter(elm => elm.name === e.name).length > 0) {
                        return (
                            <Row md={{ span: 6, offset: 3 }} className='mb-3'>
                                <Col className='d-flex justify-content-between align-items-center' >
                                    <div className='userCard'>
                                        {/* <img className='userPic' src={e.photo} alt='' /> */}
                                        <div>
                                            <p>{e.name}</p>
                                            {/* <p>{e.distance}</p>
                                            <p>{e.ranking}</p>
                                            <p>{e.admision}</p> */}
                                        </div>
                                    </div>
                                    <button className='addButton' value={e._id} onClick={handlerAddPlan} ></button>
                                </Col>
                            </Row>
                        )
                    }

                })}

            </Container>

        </div >
    )
}

export default SearchPlanBar