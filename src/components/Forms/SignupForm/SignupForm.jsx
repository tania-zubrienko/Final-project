import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import authService from '../../../services/auth.services'

const SignupForm = () => {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()

    function handleInputOnChange(event) {
        const { value, name } = event.target
        setSignupInfo({ ...signupInfo, [name]: value })
    }

    function handleSignupSubmit(event) {
        event.preventDefault()

        authService
            .signup(signupInfo)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={ handleSignupSubmit }>
            <label>Nombre</label>
            <input type="text" name="name" value={signupInfo.name} onChange={handleInputOnChange} />

            <label>E-mail</label>
            <input type="email" name="email" value={signupInfo.email} onChange={handleInputOnChange} />

            <label>Contraseña</label>
            <input type="password" name="password" value={signupInfo.password} onChange={handleInputOnChange} />

            <label>Foto de perfil</label>
            <input type="file" name="avatar" value={signupInfo.avatar} onChange={handleInputOnChange} />

            <button type="submit">Registrarse</button>
        </form>
    )
}

export default SignupForm