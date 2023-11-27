import '../Forms.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import authService from '../../../services/auth.services'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import uploadServices from '../../../services/upload.services'

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

    function handleFileUpload(e) {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => setSignupInfo({ ...signupInfo, avatar: data.cloudinary_url }))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={7}>
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

                        <div className="d-grid gap-2 mt-4">
                            <Button className='primary-button' type="submit">
                                Registrarse
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignupForm