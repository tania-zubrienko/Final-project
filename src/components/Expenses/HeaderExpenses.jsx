import { Col, Container, Row } from "react-bootstrap"
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpeg'
import './HeaderExpenses.css'
import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"

const HeaderExpenses = ({ id }) => {

    const [tripName, setTripName] = useState("")

    useEffect(() => {
        getDestinationTrip()
    }, [])

    function getDestinationTrip() {

        tripServices
            .getTripById(id)
            .then(trip => {
                console.log(trip.data.result.destination)
                setTripName(trip.data.result.destination)
            })
            .catch(err => console.log(err))

    }



    return (
        <div className="HeaderExpenses">

            <Row>
                <h3 className="mb-3">Añadir gasto</h3>
            </Row>
            <hr />

        </div>
    )

}

export default HeaderExpenses