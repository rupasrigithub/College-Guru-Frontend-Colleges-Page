import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

export default Input;
