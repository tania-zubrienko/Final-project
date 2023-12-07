import { Card } from "react-bootstrap";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel"
import './HomePage.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const HomePage = () => {

    return (
        <div className="HomePage">

            <div className="textCard">
                <div className="text">
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
                    src="https://lottie.host/d2d812ce-d1c6-4edb-a39f-8beb27166d37/0onfmUX9ph.json"
                    style={{ height: '400px', width: '400px', }}
                >
                </Player>
                <div className="text">
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