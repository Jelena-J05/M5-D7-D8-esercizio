import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ArrowUpRightSquareFill } from 'react-bootstrap-icons';
import StarRatings from 'react-star-ratings';

const AddComment = ({ asin, updateComments }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 0,
    elementId: null,
  });

  const [commentSent, setCommentSent] = useState(false);

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  const handleRatingChange = (newRating) => {
    setComment({
      ...comment,
      rate: newRating,
    });
  };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4Mjg0ODc3Y2RhYTAwMTQ2ZGYzOTQiLCJpYXQiOjE2OTk5OTI5OTIsImV4cCI6MTcwMTIwMjU5Mn0.PBxtLZQbrMCXAg8EtZmKNb4eMKdBfYE7vytUnFNcroo',
          },
        }
      );
      if (response.ok) {
        alert('Comment has been sent!');
        setCommentSent(true);
        setComment({
          comment: '',
          rate: 0,
          elementId: null,
        });
        if (typeof updateComments === 'function') {
          updateComments();
        }     
  
      } else {
        throw new Error('Please check again details you put.');
      }
    } catch (error) {
      alert(error);
    }
  };

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
          <section className="d-flex justify-content-center align-items-center gap-2">
            <StarRatings
              rating={comment.rate}
              starRatedColor={commentSent ? 'gray' : 'orange'}
              starHoverColor="orange"
              changeRating={handleRatingChange}
              numberOfStars={5}
              starDimension="30px"
              starSpacing="5px"
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
