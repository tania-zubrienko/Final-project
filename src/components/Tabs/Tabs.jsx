import Nav from 'react-bootstrap/Nav'
import cabeceraProvisional from './../../assets/cabeceraProvisional.jpg'
import './Tabs.css'

const Tabs = () => {

    return (
        <div className='Tab'>

            <div className='header'>
                <img src={cabeceraProvisional} alt='' />
            </div>

            <Nav fill variant="tabs" defaultActiveKey="#">
                <Nav.Item>
                    <Nav.Link href="/overview" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="bookings" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Booking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="plan" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Plan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="expenses" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Expenses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="info" className='tab' style={{ color: "#011e3d", padding: "2vh 0" }}>Inform</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    )

}

export default Tabs