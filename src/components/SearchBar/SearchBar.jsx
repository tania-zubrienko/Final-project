import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import defaultImg from './../../assets/profile.jpeg'
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div className="SearchBar">
            <Container>
                <h5>Listado de usuarios</h5>
                <Row md={{ span: 6, offset: 3 }}>
                    <Col className='d-flex align-items-center userCard'>
                        <img className="userPic" src={defaultImg} alt="" />
                        <div>
                            <p>Name</p>
                            <p>Email</p>
                        </div>
                        <button className="ms-auto p-2 mybutton">Añadir</button>
                    </Col>
                    <hr />
                </Row>
            </Container>

        </div >
    )
}

export default SearchBar