import { Player } from '@lottiefiles/react-lottie-player';
import './ErrorPage.css'
const ErrorPage = () => {

    return (
        <div className="ErrorPage">
            <div className="text">
                <h1>Error 404 </h1>
                <h2>(no soy una tetera pero ojalá)</h2>
            </div>

            <Player
                autoplay
                loop
                src="https://lottie.host/d4095686-b836-406d-be8d-7913003e8908/DFBQTSj1ls.json"
                style={{ height: '450px', width: '450px', }}
            >
            </Player>
        </div>
    )
}

export default ErrorPage