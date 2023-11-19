import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentList = ({ commentsToShow }) => {
  const commentsToDisplay = [...commentsToShow];

  return (
    <ListGroup style={{ color: 'black' }} className="mt-2">
      {commentsToDisplay.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
