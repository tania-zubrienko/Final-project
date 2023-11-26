import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import authService from '../../../services/auth.services'
import { AuthContext } from '../../../context/auth.context'

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
        <form onSubmit={ handleLoginSubmit }>

            <label>E-mail</label>
            <input type="email" name="email" value={loginInfo.email} onChange={handleInputOnChange} />

            <label>Contraseña</label>
            <input type="password" name="password" value={loginInfo.password} onChange={handleInputOnChange} />

            <button type="submit">Iniciar Sesion</button>
        </form>
    )
}

export default LoginForm