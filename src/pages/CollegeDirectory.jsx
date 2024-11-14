import React from 'react';
import styled from 'styled-components';
import SidebarFilter from '../components/SidebarFilter';
import Card from '../components/Card';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: #f7f7f7;
  min-height: 100vh;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Sidebar = styled.div`
  flex-basis: 25%;
`;

const MainContent = styled.div`
  flex: 1;
`;

const CollegeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const CollegeDirectory = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Sidebar>
          <SidebarFilter />
        </Sidebar>
        <MainContent>
          <CollegeListHeader>
            <h2>Showing 27326 Colleges in India</h2>
            <div>
              <label>
                <input type="radio" name="collegeFilter" /> All Colleges
              </label>
              <label style={{ marginLeft: '20px' }}>
                <input type="radio" name="collegeFilter" /> Direct Admission
              </label>
            </div>
          </CollegeListHeader>

          {/* IIT Delhi Card */}
          <Card
            name="IIT Delhi"
            location="Delhi, Delhi"
            fee="20,000 - 8,10,000"
            rating="4.6"
            reviews="35"
            shortlisted="3192"
            accreditation="NAAC"
            avgPackage="1.25 Crore"
            exams="CEED, GATE"
            imageUrl="/images/iit-delhi.jpg" 
          />

          {/* IIT Bombay Card */}
          <Card
            name="IIT Bombay"
            location="Mumbai, Maharashtra"
            fee="15,000 - 42,00,000"
            rating="4.9"
            reviews="12"
            shortlisted="1994"
            accreditation="AICTE"
            avgPackage="21.8 Lacs"
            exams="CEED, JEE Advanced"
            imageUrl="/images/bombay.jpeg" /* Add the image path */
          />

          {/* Additional Sample Colleges */}
          <Card
            name="Bimla Harihar Institute of Pharmacy"
            location="Ranchi, Jharkhand"
            fee="45,000 - 1,29,000"
            rating="4.0"
            reviews="1"
            shortlisted="2443"
            accreditation="PCI"
            imageUrl="/images/image1.jpeg"
          />

          <Card
            name="Institute of Hotel Management (IHM), Mumbai"
            location="Mumbai, Maharashtra"
            fee="20,000 - 3,18,000"
            rating="3.8"
            reviews="12"
            shortlisted="644"
            accreditation="NCHMCT"
            avgPackage="1.5 Lacs"
            exams="NCHMCT JEE"
            imageUrl="/images/image2.jpeg"
          />
        </MainContent>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default CollegeDirectory;
