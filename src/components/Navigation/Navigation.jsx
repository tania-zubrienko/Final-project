import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation