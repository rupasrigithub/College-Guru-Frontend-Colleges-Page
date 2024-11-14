import React from "react";
import styled from "styled-components";

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton = ({ id, label }) => (
  <RadioWrapper>
    <RadioInput type="radio" id={id} name="admissionType" />
    <span>{label}</span>
  </RadioWrapper>
);

export default RadioButton;
