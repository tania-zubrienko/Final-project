import Loader from "../../Loader/Loader";
import TripDates from "../../TripDates/TripDates"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './MapCard.css'
import { useEffect, useState } from "react";


const MapCard = ({ dates, defaultCords, plans }) => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw'
    })
    const [markers, setMarkers] = useState([])
    useEffect(() => {
        getMarkers()
    }, [plans])

    function getMarkers() {
        console.log("aqui los marcadores")
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
                        zoom={10}
                        center={defaultCords}
                    >

                        <Marker position={defaultCords} />
                    </GoogleMap>
                </>

            }
        </div>
    )
}

export default MapCard