import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tripServices from "../../services/trips.services"
import countryService from "../../services/country.services"

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
                console.log(response, "en el front")
                if (country) {
                    return countryService
                        .getCountryInfo(response)
                }

            })
            .then(response => setCountryInfo(response.data))  //A MAQUETAAAAAAAAAAAAAAAAAR
            .catch(err => console.log(err))

    }
}

export default Information