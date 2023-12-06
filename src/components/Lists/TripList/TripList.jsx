import { Container, Row, Toast } from "react-bootstrap"
import TripCard from "../../Cards/TripCard/TripCard"
import Loader from "../../Loader/Loader"
import { useState } from "react"


const TripList = ({ trips, refresh }) => {

    function update() {
        refresh()
    }

    return (
        !trips ?
            <Loader />
            :
            <Container>
                <Row>
                    {
                        trips.length > 0 ?
                            trips.map((trip, i) => {
                                return (
                                    <TripCard trip={trip} refreshList={update} key={i} />
                                )
                            })
                            :
                            <p>No tienes viajes</p>
                    }
                </Row>
            </Container>
    )
}

export default TripList