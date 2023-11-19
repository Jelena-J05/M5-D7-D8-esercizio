import { Card, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function SingleBook({ book, selected, setSelected }) {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => {
          setSelected(book.asin);
        }}
        style={{
          width: '16rem',
          outline: selected === book.asin ? '3px solid red' : '3px solid transparent',
        }}
        data-testid="book-card"
      >
        <Image
          src={book.img}
          className="pt-2"
          style={{
            height: "270px",
            variant: "top",
          }}
        />
        <Card.Body>
          <h6 className="text-truncate mb-4">{book.title}</h6>
          <button>
            <div className="default-btn py-2 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffd300" className="bi bi-currency-euro" viewBox="0 0 16 16">
                <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
              </svg>
              <span>{book.price}</span>
            </div>
            <div className="hover-btn">
              <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span> Buy</span>
            </div>
          </button>
          <button className="learn-more mt-4 py-0" onClick={() => navigate(`/details/${book.asin}`)}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">View Details</span>
          </button>
        </Card.Body>
      </Card>
    </>
  )
};

export default SingleBook