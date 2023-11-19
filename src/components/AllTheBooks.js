import { Row, Tab, Tabs, Col } from "react-bootstrap";
import React, { useState } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"
import ThemeContext from "../contexts/theme";
import SingleBook from "./SingleBook";
import { useContext } from 'react';
import CommentArea from "./CommentArea";

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

const AllTheBooks = ({ query }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedGenre, setSelectedGenre] = useState("fantasy");
  const [selected, setSelected] = useState(false)


  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());


  return (
      <Row>
        <Col md={8}>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className={theme === "light" ? "light my-5" : "dark my-5"}
            variant={theme}
            justify
            onSelect={(genre) => setSelectedGenre(genre)}
          >
            {Object.keys(BooksByGenre).map((genre) => (
              <Tab
                eventKey={genre}
                title={<span className={theme === "light" ? "light" : "dark"}
                >{genre.toUpperCase()}</span>}
              />
            ))}
          </Tabs>
          <Row className="row-gap-5 column-gap-5">
            {books.filter(booksByQuery).map((book) => (
              <Col xs={12} md={3} key={book.asin}>
                <SingleBook book={book}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Col>
          ))}
          </Row>
        </Col>
        <Col md={4}>
        <h3 className={`mt-5 ${theme}`}> Review our books </h3>
            <hr />
          <CommentArea asin={selected} />
        </Col>
      </Row>
  )
}
export default AllTheBooks

