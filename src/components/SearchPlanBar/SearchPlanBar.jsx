import { Col, Container, Form, Row } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import tripServices from '../../services/trips.services'
import { useParams } from 'react-router-dom'
import './SearchPlanBar.css'
import formatDate from '../../utils/date-utils'

const SearchPlanBar = ({ refresh, dates, location }) => {
    //location ahora contiene coordenadas para poder restringir resultados de busqueda
    //opcion alternativa - recibir nombre del pais en formato 'xx' para poder limitar resultados dentro de options => componentRestrictions: { country: "xx" },
    //INVESTIGAR ALTERNATIVAS

    const { id } = useParams()

    let autoCompleteRef = useRef()
    let inputRef = useRef()
    const [planInfo, setPlanInfo] = useState({
        name: '',
        placeId: '',
        destinationCoords: {},
        date: ''
    })
    const [err, setErr] = useState(false)


    const options = {
        fields: ["address_components", "geometry", "photos", "place_id", "name"],
    }
    useEffect(() => {
        initAutocomplete()
        refresh()
    }, [])

    function initAutocomplete() {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options

        )
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace()
            handlePlaceChange({ place })
        })
    }

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setPlanInfo({ ...planInfo, [name]: value })
    }

    function handlePlaceChange(coords) {
        const lat = coords.place.geometry.location.lat()
        const lng = coords.place.geometry.location.lng()
        const name = coords.place.name
        const id = coords.place.place_id
        setPlanInfo({ ...planInfo, name: name, placeId: id, destinationCoords: { lat: lat, lng: lng } })
    }

    function handleNewPlanSubmit(event) {

        if (planInfo.date === '' || planInfo.name === '') {
            event.preventDefault()
            setErr(true)
        } else {
            setErr(false)
            event.preventDefault()
            tripServices
                .addPlantoTrip(id, { placeId: planInfo.placeId, name: planInfo.name, date: planInfo.date, location: planInfo.destinationCoords })
                .then(() => {
                    setPlanInfo({
                        name: '',
                        placeId: '',
                        destinationCoords: {},
                        date: null
                    })
                    refresh()
                })
                .catch(err => console.log(err))
            refresh()
        }
    }
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="place-id" >
                    <Row className='align-items-center mt-4'>
                        <Col md={{ offset: 1, span: 6 }}>
                            <Form.Control ref={inputRef} className='place-input' type="text" placeholder="¿A donde vamos?" name="name" value={planInfo.name} onChange={handleInputOnChange} />
                        </Col>
                        <Col>
                            <Form.Control className='trip-input' type="date" min={formatDate(new Date(dates[0]))} max={formatDate(new Date(dates[dates.length - 1]))} name="date" onChange={handleInputOnChange} />
                        </Col>
                        <Col md={{ span: 2 }}>
                            <button onClick={handleNewPlanSubmit} className='addPlaceBtn shadow'>Añadir plan</button>
                        </Col>
                    </Row>
                    <p className={err ? 'd-block text-center' : 'd-none'} style={{ color: 'red' }}>Rellena todos campos</p>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SearchPlanBar