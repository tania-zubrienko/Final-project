import { SlPeople } from 'react-icons/sl'
import './HeaderExpenses.css'
import { Container } from 'react-bootstrap'

const FooterExpenses = () => {

    return (
        <div className='FooterExpenses' style={{ marginTop: '5vh', marginBottom: '5vh' }}>
            <Container>
                <hr />
                <h3 className='mt-3'><SlPeople /> Mexico City Team</h3>
            </Container>
        </div>
    )
}

export default FooterExpenses