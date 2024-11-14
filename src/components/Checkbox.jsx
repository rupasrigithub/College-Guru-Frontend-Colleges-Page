import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
`;

const CustomCheckbox = ({ id, label, count }) => (
  <CheckboxContainer>
    <Checkbox id={id} />
    <CheckboxLabel htmlFor={id}>
      {label} <span style={{ color: "#888" }}>({count})</span>
    </CheckboxLabel>
  </CheckboxContainer>
);

export default CustomCheckbox;
