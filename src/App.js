import './styles.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Container, Row} from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import ThemeContext from "./contexts/theme";
import BookDetails from "./components/BookDetails";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme + ' App'}>
          <NavBar query={query} setQuery={setQuery} />
          <Container>
            <Welcome />
            <Row>
              <h3 className={`mt-5 ${theme}`}> All the books </h3>
              <hr />
              <Routes>
                <Route path="/" element={<AllTheBooks query={query} />} />
                <Route path="/details/:asin" element={<BookDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Row>
            <Footer />
          </Container>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;
