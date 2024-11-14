import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import CustomCheckbox from "./Checkbox";
import ScrollArea from "./ScrollArea";

const SidebarWrapper = styled.div`
  width: 400px; /* Increased width for better visibility */
  background: white;
  padding: 1.5rem; /* Increased padding for more spacing */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem; /* Increased margin between sections */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const FilterTitle = styled.div`
  font-size: 1.2rem; /* Increased font size */
  font-weight: bold;
  padding: 1rem; /* Increased padding */
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
`;

const FilterContent = styled.div`
  padding: 0.75rem 1.25rem; /* Increased padding */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  max-height: 200px; /* Increased max height */
  overflow-y: auto;
`;

const SidebarFilter = () => {
  const [openSections, setOpenSections] = useState({
    degree: true,
    state: true,
    city: true,
    studyMode: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const degreeOptions = [
    { label: "B.Tech. (Bachelor of Technology)", count: 4501 },
    { label: "Diploma", count: 3428 },
    { label: "M.Tech. (Master of Technology)", count: 3079 },
    { label: "Ph.D. (Doctor of Philosophy)", count: 496 },
    { label: "B.Arch. (Bachelor of Architecture)", count: 491 },
    { label: "Post Graduate Diploma", count: 197 },
  ];

  const stateOptions = [
    { label: "Andaman & Nicobar", count: 1 },
    { label: "Andhra Pradesh", count: 516 },
    { label: "Arunachal Pradesh", count: 9 },
    { label: "Assam", count: 54 },
    { label: "Bihar", count: 99 },
    { label: "Chandigarh", count: 16 },
  ];

  const cityOptions = [
    { label: "24 Parganas", count: 1 },
    { label: "24Pgns(N)", count: 1 },
    { label: "Abohar", count: 1 },
    { label: "Abu Road", count: 2 },
    { label: "Adilabad", count: 3 },
    { label: "Agar Malwa", count: 16 },
  ];

  const studyModeOptions = [
    { label: "Distance Learning", count: 19 },
    { label: "Online", count: 6 },
    { label: "Part Time", count: 187 },
    { label: "Regular", count: 6655 },
  ];

  return (
    <SidebarWrapper>
      {/* Degree Section */}
      <FilterSection>
        <FilterTitle onClick={() => toggleSection("degree")}>
          Degree
          <span>{openSections.degree ? "▲" : "▼"}</span>
        </FilterTitle>
        <FilterContent isOpen={openSections.degree}>
          <Input placeholder="Search" />
          {degreeOptions.map((degree, index) => (
            <CustomCheckbox
              key={index}
              id={`degree-${index}`}
              label={`${degree.label} (${degree.count})`}
            />
          ))}
        </FilterContent>
      </FilterSection>

      {/* State Section */}
      <FilterSection>
        <FilterTitle onClick={() => toggleSection("state")}>
          State
          <span>{openSections.state ? "▲" : "▼"}</span>
        </FilterTitle>
        <FilterContent isOpen={openSections.state}>
          <Input placeholder="Search" />
          {stateOptions.map((state, index) => (
            <CustomCheckbox
              key={index}
              id={`state-${index}`}
              label={`${state.label} (${state.count})`}
            />
          ))}
        </FilterContent>
      </FilterSection>

      {/* City Section */}
      <FilterSection>
        <FilterTitle onClick={() => toggleSection("city")}>
          City
          <span>{openSections.city ? "▲" : "▼"}</span>
        </FilterTitle>
        <FilterContent isOpen={openSections.city}>
          <Input placeholder="Search" />
          {cityOptions.map((city, index) => (
            <CustomCheckbox
              key={index}
              id={`city-${index}`}
              label={`${city.label} (${city.count})`}
            />
          ))}
        </FilterContent>
      </FilterSection>

      {/* Study Mode Section */}
      <FilterSection>
        <FilterTitle onClick={() => toggleSection("studyMode")}>
          Study Mode
          <span>{openSections.studyMode ? "▲" : "▼"}</span>
        </FilterTitle>
        <FilterContent isOpen={openSections.studyMode}>
          <Input placeholder="Search" />
          {studyModeOptions.map((mode, index) => (
            <CustomCheckbox
              key={index}
              id={`studyMode-${index}`}
              label={`${mode.label} (${mode.count})`}
            />
          ))}
        </FilterContent>
      </FilterSection>
    </SidebarWrapper>
  );
};

export default SidebarFilter;
