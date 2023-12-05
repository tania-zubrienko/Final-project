import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import tripServices from '../../services/trips.services'
import { useParams } from 'react-router-dom'


const SearchPlanBar = () => {
    const { id } = useParams()

    let autoCompleteRef = useRef()
    let inputRef = useRef()
    const [planInfo, setPlanInfo] = useState({
        name: '',
        placeId: '',
        destinationCoords: {}
    })

    let options = {
        fields: ["address_components", "geometry", "photos", "place_id", "name"],
    }
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        )
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            console.log(place)
            handlePlaceChange({ place })
        })
    }, [])

    useEffect(() => {
        console.log(planInfo)
    }, [planInfo])

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setPlanInfo({ ...planInfo, [name]: value })
    }

    function handlePlaceChange(coords) {
        const lat = coords.place.geometry.location.lat()
        const lng = coords.place.geometry.location.lng()
        const name = coords.place.name
        const id = coords.place.place_id
        // const picture = coords.place.photos[0].getUrl()
        setPlanInfo({ ...planInfo, name: name, placeId: id, destinationCoords: { lat: lat, lng: lng } })
    }

    function handleNewPlanSubmit(event) {
        event.preventDefault()
        console.log('holaaaaa')
        tripServices
            .addPlantoTrip(id, { placeId: planInfo.placeId, name: planInfo.name })
            .then(() => console.log("para que no pete"))
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="place-id" >
                    <Row>
                        <Col md={{ offset: 1, span: 9 }}>
                            <Form.Label className='place-label' >Plan</Form.Label>
                            <Form.Control ref={inputRef} className='place-input' type="text" placeholder="Introduce que quieres visitar" name="name" value={planInfo.name} onChange={handleInputOnChange} />
                        </Col>
                        <Col md={{ span: 2 }} className='mt-4'>
                            <button onClick={handleNewPlanSubmit}>Asi??</button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SearchPlanBar