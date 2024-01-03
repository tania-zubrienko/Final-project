import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tripServices from "../../services/trips.services"
import countryService from "../../services/country.services"
import { Row, Col } from 'react-bootstrap'
import './Information.css'

const Information = () => {

    const { id } = useParams()
    const [country, setCountry] = useState()
    const [countryInfo, setCountryInfo] = useState()

    useEffect(() => getCountry(), [country])

    function getCountry() {

        tripServices
            .getTripById(id)
            .then(res => {
                setCountry(res.data.result.country)
                return country
            })
            .then(response => {
                if (country) {
                    return countryService.getCountryInfo(response)
                }
            })
            .then(response => setCountryInfo(response.data))  //A MAQUETAAAAAAAAAAAAAAAAAR
            .catch(err => console.log(err))

    }

    return (
        countryInfo &&
        <div className="Information">
            <Row style={{ marginBottom: 10, marginTop: 3 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Capital:</Col>
                <Col md={{ span: 4, offset: 2 }}>{countryInfo.capital}</Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Idioma oficial:</Col>
                <Col md={{ span: 4, offset: 2 }}>{countryInfo.officialLanguages}</Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Área total:</Col>
                <Col md={{ span: 4, offset: 2 }}>{countryInfo.surfaceAreaKm2} km</Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Población:</Col>
                <Col md={{ span: 4, offset: 2 }}>{countryInfo.population} personas</Col>
            </Row>
            <Row style={{ marginBottom: 15 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Densidad de población:</Col>
                <Col md={{ span: 4, offset: 2 }}>{countryInfo.populationDensityKm2} personas/km</Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
                <Col md={{ span: 4, offset: 1 }} style={{ fontWeight: 'bold' }}>Fronteras:</Col>
                <Col md={{ span: 4, offset: 2 }}> {countryInfo.neighborsList.length === 0 ? "No tiene fronteras con otros paises" :
                    countryInfo.neighborsList.map((e, i) => <h4 key={i}>✦ {e}</h4>)

                }</Col>
            </Row>




        </div >
    )
}

export default Information