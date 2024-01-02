import Loader from "../../Loader/Loader";
import TripDates from "../../TripDates/TripDates"
import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapCard.css'
import { useEffect, useState } from "react";
import planService from "../../../services/plan.services";
import formatDate from "../../../utils/date-utils";
import { useParams } from "react-router-dom";
import SavedPlanRow from "../../SavedPlanRow/SavedPlanRow";

const MapCard = ({ dates, defaultCords, plans }) => {

    const { id } = useParams()

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw'
    })
    const [searchDate, setSearchDate] = useState()
    const [planData, setPlanData] = useState(plans)

    useEffect(() => {
        filterPlans()
    }, [searchDate || plans])



    function filterPlans() {

        planService
            .filterPlans(id, searchDate)
            .then(({ data }) => {
                setPlanData(data)
            })
            .catch(err => console.log(err))
    }

    function filterByDay(e) {
        console.log(e.target.value)
        if (e.target.value !== undefined && e.target.value !== 'Todo') {
            setSearchDate(formatDate(new Date(e.target.value)))
        }
        else {
            setSearchDate(undefined)
            setPlanData(plans)
        }
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
                    >
                        {
                            planData.map((e, i) => {
                                return < Marker position={e.location} key={i} />
                            })
                        }
                    </GoogleMap>
                    <SavedPlanRow myPlans={planData} dates={dates} id={id} />
                </>

            }
        </div >
    )
}

export default MapCard