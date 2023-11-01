import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MainWrapper = styled.main`
  padding-bottom: 100px;
  color: #5a5a5a;
`;

const FeaturetteDivider = styled.hr`
  margin: 5rem 0;
`;

const FeaturetteHeading = styled.h2`
  letter-spacing: -0.05rem;
  padding-top: 100px;

  @media (min-width: 40em) {
    font-size: 50px;
  }

  @media (min-width: 62em) {
    margin-top: 7rem;
  }
`;

function About() {
  return (
    <MainWrapper>
      <FeaturetteHeading style={{ textAlign: "center" }}>
        About Us
      </FeaturetteHeading>
      <p style={{ textAlign: "center" }}>
        We are Outdoorways, your trusted source for high-quality outdoor gear and equipment.
        Our mission is to inspire and equip people to connect with nature and make the most
        of their time outside.
      </p>
      <div className="container">
        <FeaturetteDivider />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Our Story{" "}
            </h2>
            <p className="lead">
              Outdoorways was founded by outdoor enthusiasts who wanted to share their passion
              for adventure with the world. We believe that spending time in nature can be a
              transformative experience, and we want to make it easy for everyone to enjoy
              the great outdoors.
            </p>
          </div>
          <div className="col-md-5 order-md-1 align-self-center">
            <div className="text-center">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid"
                src="../images/Story.png"
                width={500}
                height={500}
                alt="About Us"
              />
            </div>
          </div>
        </div>
        <FeaturetteDivider />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Our Mission{" "}
            </h2>
            <p className="lead">
              Our mission is to provide you with the best outdoor gear and expert advice to
              help you have unforgettable outdoor experiences. Whether you're a seasoned
              adventurer or just starting your journey, we're here to support you every step
              of the way.
            </p>
          </div>
          <div className="col-md-5 order-md-1 align-self-center">
            <div className="text-center">
              <img
                src="../images/Mission.png"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid"
                width={500}
                height={500}
                alt="Our Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default About;
