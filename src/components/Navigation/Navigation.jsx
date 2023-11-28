import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from './../../assets/homeWhite.png'
import tripIcon from './../../assets/tripWhite.png'
import wishListIcon from './../../assets/wishlistWhite.png'
import logo from './../../assets/logo.png'



import './Navigation.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context'



const Navigation = () => {
    const navigate = useNavigate()
    const { loggedUser, logout } = useContext(AuthContext)
    const closeSession = () => {
        logout()
        navigate('/')
    }
    return (
        <div className="Navigation">
            <Container>
                <Navbar expand="md">
                    <Link className='navButtons logo' to={'/'}> <img className='logoImg' src={logo} alt="logo" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#fff', borderBlockColor: '#fff' }} />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav>
                            <Link className='navButtons' to={'/'}><img src={homeIcon} alt="home" /> Inicio </Link>
                            {loggedUser && <>

                                <Link className='navButtons' to={'/viajes'}><img src={tripIcon} alt="trips" /> Viajes </Link>
                                <Link className='navButtons' to={'/lista-deseos'}><img src={wishListIcon} alt="wishlist" /> WishList </Link>
                                <Link className='navButtons' to={'/pruebas'}> Pruebas </Link>

                            </>}

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                        {
                            loggedUser ?
                                <>
                                    <Link className='navButtons' to={'/perfil'}> Mi Perfil</Link>
                                    <Link className='navButtons' onClick={closeSession}>Cerrar sessión</Link>
                                </>

                                :
                                <>
                                    <Link className='navButtons' to={'/inicio-sesion'}> Iniciar Sesion </Link>
                                    <Link className='navButtons' to={'/registrarse'}> Registrarse </Link>
                                </>
                        }


                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div >
    )
}

export default Navigation