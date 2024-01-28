import React from "react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = halfStars ? 5 - (rating + 1) : 5 - rating;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <i key={index} className="fa-sharp fa-solid fa-star" />
  ));

  if (halfStars) {
    stars.push(<i className="fa-sharp fa-regular fa-star-half-stroke" />);
  }

  if (emptyStars != 0) {
    for (let i = 0; i < emptyStars; ++i) {
      stars.push(<i className="fa-sharp fa-regular fa-star" />);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
