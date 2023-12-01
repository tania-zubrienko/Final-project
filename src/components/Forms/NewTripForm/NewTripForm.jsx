import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import formatDate from "../../../utils/date-utils"
import tripServices from '../../../services/trips.services'
import { useNavigate } from "react-router-dom"
import AlertForm from '../AlertForm/AlertForm'
import { useRef, useEffect } from "react";


const NewTripForm = () => {

    let autoCompleteRef = useRef();
    let inputRef = useRef();

    let options = {
        fields: ["address_components", "geometry", "photos", "name"],
    }
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        )
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            console.log(place.photos[0].getUrl())
            handleDestinationChange({ place })

        })
    }, [])

    const todayDate = new Date()
    const minDate = formatDate(todayDate)

    const [tripInfo, setTripInfo] = useState({
        destination: '',
        startDate: '',
        endDate: '',
        tripImage: '',
        destinationCoords: {}
    })

    const [errors, setErrors] = useState([])

    function handleInputOnChange(event) {
        const { value, name } = event.target
        console.log(value, name)
        setTripInfo({ ...tripInfo, [name]: value })
    }

    function handleDestinationChange(coords) {
        const lat = coords.place.geometry.location.lat()
        const lng = coords.place.geometry.location.lng()
        const city = coords.place.address_components[0].long_name
        const picture = coords.place.photos[0].getUrl()
        setTripInfo({ ...tripInfo, destinationCoords: { lat: lat, lng: lng }, destination: city, tripImage: picture })
    }

    const navigate = useNavigate()

    function handleNewTripSubmit(event) {
        event.preventDefault()
        tripServices
            .createTrip(tripInfo)
            .then(() => navigate('/viajes'))
            .catch(err => setErrors(err))
    }

    return (

        <Form onSubmit={handleNewTripSubmit}>
            <Form.Group className="mb-3" controlId="destination-id">
                <Form.Label className='trip-label' >Destino</Form.Label>
                <Form.Control ref={inputRef} className='trip-input' type="text" placeholder="Introduce el destino" name="destination" value={tripInfo.destination} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
                <Form.Label className='trip-label'>Ida</Form.Label>
                <Form.Control className='trip-input' type="date" min={minDate} placeholder="Introduce la fecha de ida" name="startDate" value={tripInfo.startDate} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEndDate">
                <Form.Label className='trip-label'>Vuelta</Form.Label>
                <Form.Control className='trip-input' type="date" min={tripInfo.startDate} placeholder="Introduce la fecha de vuelta" name="endDate" value={tripInfo.endDate} onChange={handleInputOnChange} />
            </Form.Group>

            {
                errors.length > 0 && errors.map(e => <AlertForm key={e} message={e}></AlertForm>)
            }

            <div className="d-grid gap-2 mt-5">
                <Button className='primary-button' type="submit">
                    Crear
                </Button>
            </div>
        </Form>

    )
}

export default NewTripForm