import { Card } from "react-bootstrap";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel"
import './HomePage.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const HomePage = () => {

    return (
        <div className="HomePage">

            <div className="textCard">
                <div className="text2">
                    <h3> Planificación fácil e intuitiva</h3>
                    <p> ✦  Guarda documentos en un mismo lugar</p>
                    <br />
                    <p> ✦  Divide gastos de viaje con amigos</p>

                    <br />
                </div>

                <Player
                    autoplay
                    loop
                    src="https://lottie.host/a23c9cb3-9784-4808-880f-db1da74f1d9b/fiOHmKpGUV.json"
                    style={{ height: '450px', width: '450px', }}
                >
                </Player>
            </div>

            <div className="textCard">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/f79344f9-ca9f-418c-93ed-5df38423a33b/fVqXN9JYyQ.json"
                    style={{ height: '400px', width: '400px', }}
                >
                </Player>
                <div className="text2">
                    <h3> Información del país a tu alcance</h3>
                    <p> ✦  Optimiza tus itenerarios</p>
                    <br />
                    <p> ✦  Gestiona las reservas</p>

                    <br />
                </div>
            </div>
        </div >

    )
}

export default HomePage