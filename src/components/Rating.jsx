// src/components/Rating.jsx
import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffcc00;
`;

const Rating = ({ value }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const ratingValue = index + 1;
    if (ratingValue <= value) return <FaStar key={index} />;
    if (ratingValue === Math.ceil(value) && !Number.isInteger(value))
      return <FaStarHalfAlt key={index} />;
    return <FaRegStar key={index} />;
  });

  return <RatingWrapper>{stars}</RatingWrapper>;
};

export default Rating;
