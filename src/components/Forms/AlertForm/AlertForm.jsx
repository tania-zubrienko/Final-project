import Alert from 'react-bootstrap/Alert'
import './AlertForm.css'
const AlertForm = ({ message }) => {

    return (
        <Alert variant={'danger'} className='alert' >
            {message}
        </Alert>
    )
}

export default AlertForm