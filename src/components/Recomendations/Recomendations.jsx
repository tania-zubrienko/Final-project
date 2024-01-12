import './Recomendations.css'
import { Container, Row, Col, Toast, Modal, Button, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { HiOutlinePhoto } from "react-icons/hi2"
import { HiOutlineBuildingLibrary } from "react-icons/hi2"
import { FaTheaterMasks } from "react-icons/fa"
import { RiGalleryLine } from "react-icons/ri"
import tripServices from "../../services/trips.services"
import searchService from '../../services/searchNearby.services'
import placeServices from '../../services/places.services'
import formatDate from '../../utils/date-utils'


const Recomendations = ({ refresh, dates }) => {
    const { id } = useParams()

    const [recomendations, setRecomendations] = useState([])
    const [savedPlans, setSavedPlans] = useState([])
    const [show, setShow] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [savedPlan, setSavedPlan] = useState({
        planId: '',
        planDate: '',
    })
    const [err, setErr] = useState()


    let icon = ''

    useEffect(() => getTripInfo(id), [dates])

    function getTripInfo(id) {

        tripServices
            .getTripById(id)
            .then(result => {
                const { lat, lng } = result.data.result.destinationCoords
                setSavedPlans(result.data.result.placesOfInterest)
                return searchService.getPlaceBycoords(lat, lng)
            })
            .then(res => setRecomendations(res.data.places))
            .catch(err => console.log(err))

    }

    function getPlanId(e) {
        setShowModal(true)
        const { value } = e.target
        setSavedPlan({ ...savedPlan, planId: value })

    }

    function handleInputOnChange(e) {
        const date = e.target.value
        setSavedPlan({ ...savedPlan, planDate: date })
        //setErrClass(false)
    }

    function closeModal() {
        // setErrClass(false)
        setShowModal(false)
        setSavedPlan({ planDate: '', planId: '' })
        setErr()
    }

    function save() {
        //if (savedPlan.planDate !== '') {
        //  setErrClass(false)
        //setShowModal(false)
        //setShow(true)
        getTripInfo(id)

        placeServices
            .getPlaceInfo(savedPlan.planId)
            .then(res => {
                const { location } = res.data
                const { name } = res.data
                const { planId: placeId, planDate: date } = savedPlan
                return tripServices.addPlantoTrip(id, { placeId, name, date, location })
            })
            .then(() => {
                refresh()
                setSavedPlan({ planDate: '', planId: '' })
                setShowModal(false)
                setShow(true)
                setErr()
            })
            .catch(err => setErr(err.response.data.errorMessage))
        // } else {
        //   setErrClass(true)
        //}
    }

    return (
        <div className="Recomendations">

            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide className='toastAdd'>
                <Toast.Body>
                    <h5><strong className="me-auto">Plan actualizado</strong></h5>
                </Toast.Body>
            </Toast>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Elije la fecha</Modal.Title>
                </Modal.Header>
                {dates &&
                    <Modal.Body>
                        <Form.Control className='trip-input' type="date" min={formatDate(new Date(dates[0]))} max={formatDate(new Date(dates[dates.length - 1]))} name="date" onChange={handleInputOnChange} />
                        {err && <p className='d-block text-center' style={{ color: 'red' }}>{err}</p>}
                        {/* <p className={errClass ? `d-block text-center` : `d-none`} style={{ color: 'red' }}> La fecha es obligatoria</p> */}
                    </Modal.Body>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>



            <Container>
                <h3 className="mt-5 mb-3">Te puede interesar!</h3>
                < Row className="mt-5"  >
                    {recomendations && recomendations.map(e => {
                        if (e.types.includes("art_gallery")) {
                            icon = 'RiGalleryLine'
                        }
                        else if (e.types.includes("museum")) {
                            icon = 'HiOutlineBuildingLibrary'
                        }
                        else if (e.types.includes("tourist_attraction")) {
                            icon = 'HiOutlinePhoto'
                        }
                        else if (e.types.includes("performing_arts_theater")) {
                            icon = 'FaTheaterMasks'
                        }
                        return (

                            <Col key={e.id} className="mb-5">
                                <div className="recomedationCard" >
                                    {icon === 'HiOutlinePhoto' && <h1 ><HiOutlinePhoto className="placeIcon" /></h1>}
                                    {icon === 'HiOutlineBuildingLibrary' && <h1 ><HiOutlineBuildingLibrary className="placeIcon" /></h1>}
                                    {icon === 'RiGalleryLine' && <h1 ><RiGalleryLine className="placeIcon" /></h1>}
                                    {icon === 'FaTheaterMasks' && <h1 ><FaTheaterMasks className="placeIcon" /></h1>}

                                    <div className="details">
                                        <h5>{e.displayName.text}</h5>
                                        <h6 className="mt-3">Valoraciones: {e.rating}</h6>
                                        <h6>{e.formattedAddress}</h6>
                                        {e.currentOpeningHours ? <p>Suele estar abierto : {e.currentOpeningHours.weekdayDescriptions[0].split(' ').slice(1)}</p>
                                            : <p>No hay información sobre el horario </p>}
                                        <button sm={6} className="saveButton mt-3" onClick={getPlanId} value={e.id}>Añadir al viaje</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div >
    )

}

export default Recomendations