import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeContext from "../contexts/theme";
import { useContext } from 'react';


function Footer () {
  const { theme} = useContext(ThemeContext);

  return (
    <Container fluid className={theme==="light" ? "light mt-5 text-dark": "dark mt-5 text-white"}
    variant={theme}
    >    
      <Row>
        <Col className='my-3 d-flex justify-content-center'> 
        <span> All rights reserved. &copy; EpiBooks</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;