import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ variant }) => (variant === 'outline' ? 'transparent' : '#007bff')};
  color: ${({ variant }) => (variant === 'outline' ? '#007bff' : 'white')};
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
