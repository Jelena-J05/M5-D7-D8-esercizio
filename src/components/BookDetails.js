import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy'
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

const BookDetails = () => {
  const params = useParams()
  const selectedBook =
    fantasy.find((book) => book.asin === params.asin) ||
    history.find((book) => book.asin === params.asin) ||
    horror.find((book) => book.asin === params.asin) ||
    romance.find((book) => book.asin === params.asin) ||
    scifi.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={selectedBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {selectedBook.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails