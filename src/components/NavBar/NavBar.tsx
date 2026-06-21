import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
function NavBar() {
  return (
     <Navbar expand="lg" className="m-0 px-0 justify-content-evenly align-items-center NavBar">
      <Container className='container-fluid m-0'>
        <Navbar.Brand href="#home" className='p-0 m-0 fw-bold'>Digital Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0 shadow-none'/>
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#TESTIMONIALS">Testimonials</Nav.Link>
            <Nav.Link href="#contact_us">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;