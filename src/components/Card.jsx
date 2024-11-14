import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Rating from './Rating';
import Badge from './Badge';

// Wrapper for the entire card
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  max-width: 100%;
`;

// Image container with fixed dimensions
const ImageContainer = styled.div`
  width: 35%;
  position: relative;
`;

const CollegeImage = styled.img`
  width: 100%;
  height: 160px; 
  border-radius: 8px;
  object-fit: cover;
`;

// Featured badge positioning
const BadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffc107;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.85rem;
`;

// Content wrapper with details
const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Flex container for details section
const InfoText = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
`;

// Row for ratings and reviews
const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Footer for action buttons
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const Card = ({
  name,
  location,
  fee,
  rating,
  reviews,
  accreditation,
  shortlisted,
  avgPackage,
  exams,
  imageUrl,
  featured,
}) => (
  <CardWrapper>
    <ImageContainer>
      <CollegeImage src={imageUrl} alt={name} />
      {featured && <BadgeWrapper>Featured</BadgeWrapper>}
    </ImageContainer>

    <CardContent>
      <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{name}</h3>
      <RatingSection>
        <Rating value={rating} />
        <span style={{ fontSize: '0.85rem', color: '#666' }}>({reviews} Reviews)</span>
      </RatingSection>
      <InfoText>{location}</InfoText>
      <InfoText>Fees: <strong>{fee}</strong> | {accreditation} Accredited</InfoText>
      {avgPackage && (
        <InfoText>Avg Package: <strong>{avgPackage}</strong></InfoText>
      )}
      {exams && (
        <InfoText>Exams: <strong>{exams}</strong></InfoText>
      )}
      <InfoText>Shortlisted by <strong>{shortlisted}+</strong> students</InfoText>
      <CardFooter>
        <Button variant="primary">Apply Now</Button>
        <Button variant="secondary">Get Free Counselling</Button>
      </CardFooter>
    </CardContent>
  </CardWrapper>
);

export default Card;
