import ThemeContext from "../contexts/theme";
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-book.png';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { BrightnessHighFill, MoonStarsFill } from 'react-bootstrap-icons';

const NavBar = ({ query, setQuery}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg" className={theme==="light" ? "light": "dark"}
    variant={theme}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center me-1">
          EpiBooks
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top ms-2"
            alt="Epibook logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="text-decoration-none">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/about" className="text-decoration-none">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/browse" className="text-decoration-none">
              <div className="nav-link">Browse</div>
            </Link>
            </Nav>
        </Navbar.Collapse>
        <Col md={3}>
        <Form.Group>            
              <Form.Control
                type="text"
                placeholder="Search for a book"
                className="text-center"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            </Col>
            <button className={theme==="light" ? "light ms-5 border border-secondary rounded-pill py-2 px-3": "dark ms-5 border border-secondary rounded-pill py-2 px-3"} onClick= {()=> setTheme (theme==="light" ? "dark": "light")} >
            {theme === "light" ? <BrightnessHighFill className="fs-4"/> : <MoonStarsFill className="fs-5"/>}
            </button>
      </Container>
    </Navbar>
  );
}

export default NavBar;