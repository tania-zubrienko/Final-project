import '../Forms.css'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import authService from '../../../services/auth.services'
import { AuthContext } from '../../../context/auth.context'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

const LoginForm = () => {
    const [loginInfo, setloginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { authUser } = useContext(AuthContext)

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setloginInfo({ ...loginInfo, [name]: value })
    }

    function handleLoginSubmit(event) {
        event.preventDefault()

        authService
            .login(loginInfo)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='trip-label'>E-mail</Form.Label>
                <Form.Control className='trip-input' type="email" placeholder="Introduce tu e-mail" name="email" value={loginInfo.email} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className='trip-input' type="password" placeholder="Introduce tu contraseña" name="password" value={loginInfo.password} onChange={handleInputOnChange} />
            </Form.Group>

            <div className="d-grid gap-2 mt-4">
                <Button className='primary-button' type="submit">
                    Iniciar Sesion
                </Button>
            </div>
        </Form>
    )
}

export default LoginForm