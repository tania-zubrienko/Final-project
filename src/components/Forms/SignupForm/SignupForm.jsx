import '../Forms.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Form } from 'react-bootstrap'
import authService from '../../../services/auth.services'
import uploadServices from '../../../services/upload.services'
import profilepic from './../../../assets/profileDefault.png'
import AlertForm from '../AlertForm/AlertForm'

const SignupForm = () => {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        avatar: profilepic
    })

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

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
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    function handleFileUpload(e) {
        setIsLoading(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupInfo({ ...signupInfo, avatar: data.cloudinary_url })
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (

        <Form onSubmit={handleSignupSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='trip-label'>Nombre</Form.Label>
                <Form.Control className='trip-input' type="text" placeholder="Introduce tu nombre" name="name" value={signupInfo.name} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='trip-label'>E-mail</Form.Label>
                <Form.Control className='trip-input' type="email" placeholder="Introduce tu e-mail" name="email" value={signupInfo.email} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className='trip-input' type="password" placeholder="Introduce tu contraseña" name="password" value={signupInfo.password} onChange={handleInputOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAvatar">
                <Form.Label className='trip-label'>Foto de perfil</Form.Label>
                <Form.Control className='trip-input' type="file" placeholder="Introduce tu foto de perfil" name="avatar" onChange={handleFileUpload} />
            </Form.Group>

            {errors.length > 0 && errors.map(e => <AlertForm key={e} message={e} />)}

            <div className="d-grid gap-2 mt-4">
                <Button className='primary-button shadow' type="submit" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : 'Registrarse'} 
                </Button>
            </div>
        </Form>

    )
}

export default SignupForm