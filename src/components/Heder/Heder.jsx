import {Container,Nav,Navbar} from 'react-bootstrap';

const Heder=()=>{
return(
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
)
}

export default Heder;