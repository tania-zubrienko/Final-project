import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './../../assets/carousel1.jpg';
import carousel2 from './../../assets/carousel2.jpg';
import carousel3 from './../../assets/carousel3.jpg';
import carousel4 from './../../assets/carousel4.jpg';
import './HomeCarousel.css'



const HomeCarousel = () => {
    return (
        <div className="HomeCarousel">
            <Carousel fade data-bs-theme="dark">
                <Carousel.Item className='carouselImg'>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h1>Todo lo que necesitas para tu viaje</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselImg'>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h1>Planifica viajes con amigos</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselImg'>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h1>Ten todos tus documentos a mano</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselImg'>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caption' >
                        <h1>Divide costes entre los amigos</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel