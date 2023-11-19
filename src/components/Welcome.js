import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import ThemeContext from "../contexts/theme";
import { useContext } from 'react';
import background from '../background1.jpg';

function Welcome() {
    const { theme} = useContext(ThemeContext);

    const alertStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <Container>
        <Alert className={theme==="light" ? "0.1 mt-5": "0.8 mt-5 text-dark"}
    variant={theme} style={alertStyle}>      
            <Alert.Heading> Hey there👋, welcome to our bookstore! </Alert.Heading>
            <p>
                Books can transport you across the world, so it's definitely worth visiting our bookstore to buy one.
            </p>
            <p className="mb-0">
                Below you can find the latest releases of our books.
            </p>
        </Alert>
        </Container>
    );
}

export default Welcome;