import { Button, ListGroup } from 'react-bootstrap'
import { TrashFill } from 'react-bootstrap-icons' 

const SingleComment = ({ comment, updateComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4Mjg0ODc3Y2RhYTAwMTQ2ZGYzOTQiLCJpYXQiOjE2OTk5OTI5OTIsImV4cCI6MTcwMTIwMjU5Mn0.PBxtLZQbrMCXAg8EtZmKNb4eMKdBfYE7vytUnFNcroo',
          },
        }
      )
      if (response.ok) {
        alert('Comment has been deleted!');
        if (typeof updateComments === 'function') {
          updateComments();         }
  
      } else {
        throw new Error('Comment has not been deleted!');
      }
    } catch (error) {
      alert(error);
    }
  };
  
  return (
    <ListGroup.Item data-testid="single-comment" className="d-flex justify-content-between">
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        <TrashFill/>
      </Button>
    </ListGroup.Item>
  )
}
export default SingleComment

