import Loader from "../../Loader/Loader";
import TripDates from "../../TripDates/TripDates"
import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapCard.css'
import { useEffect, useState } from "react";


const MapCard = ({ dates, defaultCords, plans }) => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw'
    })
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        getMarkers()
    }, [plans])

    function getMarkers() {
        const coords = plans.map(elm => elm.location)
        setMarkers(coords)
    }
    return (
        <div className="MapCard mt-5">
            {(loadError || !isLoaded)
                ?
                <Loader />
                :
                <>
                    <TripDates dates={dates} />
                    <GoogleMap
                        mapContainerClassName="mapContainer"
                        zoom={11}
                        center={defaultCords}
                    >
                        {markers.map((e, i) => <Marker position={e} key={i} />)}

                    </GoogleMap>
                </>

            }
        </div>
    )
}

export default MapCard