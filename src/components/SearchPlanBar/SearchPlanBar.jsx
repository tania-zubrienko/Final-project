import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import tripServices from '../../services/trips.services'
import { useParams } from 'react-router-dom'
import './SearchPlanBar.css'
import shortDate from '../../utils/shortDate.utils'
import formatDate from '../../utils/date-utils'

const SearchPlanBar = ({ refresh, dates }) => {
    const { id } = useParams()

    let autoCompleteRef = useRef()
    let inputRef = useRef()
    const [planInfo, setPlanInfo] = useState({
        name: '',
        placeId: '',
        destinationCoords: {},
        date: ''
    })

    let options = {
        fields: ["address_components", "geometry", "photos", "place_id", "name"],
    }
    useEffect(() => {
        initAutocomplete()
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
        event.preventDefault()
        console.log(Date.parse(planInfo.date))
        tripServices
            .addPlantoTrip(id, { placeId: planInfo.placeId, name: planInfo.name, date: planInfo.date })
            .then(() => {
                refresh()
                setPlanInfo({
                    name: '',
                    placeId: '',
                    destinationCoords: {},
                    date: null
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="place-id" >
                    <Row className='align-items-center mt-4'>
                        <Col md={{ offset: 1, span: 8 }}>
                            <Form.Control ref={inputRef} className='place-input' type="text" placeholder="¿A donde vamos?" name="name" value={planInfo.name} onChange={handleInputOnChange} />
                        </Col>
                        <Col>
                            <Form.Select aria-label="date" onChange={handleInputOnChange} name="date">
                                <option>Elige la fecha</option>
                                {dates.map(e => <option>{formatDate(e)}</option>)}
                            </Form.Select>
                        </Col>
                        <Col md={{ span: 2 }}>
                            <button onClick={handleNewPlanSubmit} className='addPlaceBtn shadow'>Añadir plan</button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SearchPlanBar