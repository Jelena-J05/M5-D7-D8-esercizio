import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ArrowUpRightSquareFill} from 'react-bootstrap-icons'
import { Rating } from 'react-simple-star-rating'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 0,
    elementId: null,
  })


  const [commentSent, setCommentSent] = useState(false); 
  
  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const handleRating = (rate) => {
    setComment({
      ...comment,
      rate: rate,
    }); 
    };

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4Mjg0ODc3Y2RhYTAwMTQ2ZGYzOTQiLCJpYXQiOjE2OTk5OTI5OTIsImV4cCI6MTcwMTIwMjU5Mn0.PBxtLZQbrMCXAg8EtZmKNb4eMKdBfYE7vytUnFNcroo",
          },
        }
      )
      if (response.ok) {
        alert('Comment has been sent!')
        setCommentSent(true); 
        setComment({
          comment: '',
          rate: 0,
          elementId: null,
        })
    
        } else {
        throw new Error ('Please check again details you put.')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label> Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please add your comment"
            className="text-center"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label> Rating </Form.Label>
          <section className='d-flex justify-content-center align-items-center gap-2'>
            <Rating
              onClick={handleRating}
              ratingValue={comment.rate}
              emptyColor={commentSent ? 'gray' : 'gray'} 
              activeColor={commentSent ? 'gray' : 'gray'} 
            />
            {comment.rate}
          </section>
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">
          Send <ArrowUpRightSquareFill className="ms-2" />
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
