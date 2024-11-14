import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ScrollAreaContainer = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || "300px"};
  overflow-y: auto;
  padding-right: 10px;
  margin-right: -10px;
  scrollbar-width: thin;
  scrollbar-color: #007bff #f0f0f0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const ScrollArea = ({ children, maxHeight }) => (
  <ScrollAreaContainer maxHeight={maxHeight}>{children}</ScrollAreaContainer>
);

ScrollArea.propTypes = {
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.string,
};

export default ScrollArea;
