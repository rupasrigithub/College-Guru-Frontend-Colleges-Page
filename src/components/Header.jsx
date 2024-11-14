// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #001f3f; /* Navy blue color */
  padding: 20px 30px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff; /* White text color */
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #e0e0e0; /* Light grey text for better contrast */
  line-height: 1.6;
  margin: 0;
`;

const ReadMore = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #00aaff; /* Lighter blue for the link */
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Top Engineering Colleges in India 2025</Title>
      <Description>
        The list of top engineering colleges in India 2024 includes IIT Madras, IIT Bombay, IIT Kanpur, IIT Roorkee, IIT Kharagpur, etc. Out of the total engineering colleges in India, 95 colleges are privately owned and 92 colleges are administered by the government. The best engineering colleges in India 2024 include a total of 23 IITs, 31 NITs, and 25 IIITs. JEE Main and Advanced being the major entrance exams.
      </Description>
      <ReadMore href="#">Read More</ReadMore>
    </HeaderContainer>
  );
};

export default Header;
