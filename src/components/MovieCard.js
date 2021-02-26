import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <StarRatingComponent name="rate" starCount={5} value={movie.rate} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
