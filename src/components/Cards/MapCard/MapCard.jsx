import './MapCard.css'
import markerIcon from '../../../assets/marker.png'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import TripDates from "../../TripDates/TripDates"
import SavedPlanRow from "../../SavedPlanRow/SavedPlanRow";
import planService from "../../../services/plan.services";
import formatDate from "../../../utils/date-utils";
import shortDate from '../../../utils/shortDate';

import { Modal } from 'react-bootstrap'
import PlanDetails from '../../PlanDetails/PlanDetails';
import placeServices from '../../../services/places.services'
const MapCard = ({ dates, defaultCords, plans }) => {

    const { id } = useParams()

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw'
    })
    const [searchDate, setSearchDate] = useState()
    const [planData, setPlanData] = useState(plans)
    const [isOpen, setIsOpen] = useState(false)
    const [infoWindowData, setInfoWindowData] = useState()
    const [markers, setMarkers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [currentPlace, setCurrentPlace] = useState()

    useEffect(() => {
        filterPlans()
        getMarkers(planData)
    }, [searchDate || plans])

    function getMarkers(data) {
        const markerList = data.map(e => e.location)
        setMarkers(markerList)
    }
    function handleMarker(plan, id) {
        const planDate = shortDate(new Date(plan.date))
        const name = plan.name
        setInfoWindowData({ id, planDate, name })
        setIsOpen(!isOpen)
    }
    function getPlaceInfo(e) {

        const { value } = e.target
        placeServices
            .getPlaceInfo(value)
            .then(res => setCurrentPlace(res.data))
            .catch(err => console.log(err))
        setShowModal(true)
    }
    function closeModal() {
        setCurrentPlace()
        setShowModal(false)
    }
    function filterPlans() {

        planService
            .filterPlans(id, searchDate)
            .then(({ data }) => {
                setPlanData(data)
                getMarkers(data)
            })
            .catch(err => console.log(err))
    }

    function filterByDay(e) {

        if (e.target.value !== undefined && e.target.value !== 'Todo') {
            setSearchDate(formatDate(new Date(e.target.value)))
        }
        else {
            setSearchDate(undefined)
            setPlanData(plans)
        }
    }

    function setBounds(map) {
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);
        console.log(bounds)
    }
    return (
        <div className="MapCard mt-5">
            {(loadError || !isLoaded)
                ?
                <Loader />
                :

                <>
                    <TripDates dates={dates} filterByDay={filterByDay} />
                    <GoogleMap
                        mapContainerClassName="mapContainer"
                        zoom={11}
                        center={defaultCords}
                        onLoad={setBounds}
                    >
                        {
                            markers.map((e, i) => {
                                return < Marker
                                    position={e}
                                    key={i}
                                    icon={markerIcon}
                                    onClick={() => handleMarker(e, i)}>
                                    {isOpen && infoWindowData?.id === i &&
                                        (<InfoWindow onCloseClick={() => setIsOpen(false)}>
                                            <div className='infoWindow'>
                                                <button onClick={getPlaceInfo} value={e.placeId}>{infoWindowData.name} </button>
                                                <p>Guardado para {infoWindowData.planDate} </p>
                                            </div>
                                        </InfoWindow>)
                                    }</Marker>


                            })
                        }
                    </GoogleMap>
                    <SavedPlanRow myPlans={planData} refresh={filterPlans} dates={dates} id={id} />


                    <Modal size='lg' show={showModal} onHide={closeModal} >
                        <Modal.Header closeButton>
                            <Modal.Title>Detalle del Plan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <PlanDetails placeInfo={currentPlace} refreshInfo={filterByDay} />
                        </Modal.Body>
                    </Modal>
                </>

            }
        </div >
    )
}

export default MapCard