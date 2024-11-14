// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f0f0f0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ContactButton = styled.button`
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #004494;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </FooterLinks>
      <ContactButton>Talk to our Experts</ContactButton>
    </FooterWrapper>
  );
};

export default Footer;
