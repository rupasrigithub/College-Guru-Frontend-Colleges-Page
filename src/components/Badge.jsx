import styled from "styled-components";

const Badge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background-color: ${({ variant }) => (variant === "secondary" ? "#f0f0f0" : "#FFD700")};
  color: ${({ variant }) => (variant === "secondary" ? "#555" : "#000")};
  border-radius: 12px;
  font-size: 0.75rem;
`;

export default Badge;
