import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Camping() {
    const FeaturetteDivider = styled.hr`margin: 5rem 0;`;
    const Title1 = styled.h1`text-align: center; color: grey; padding-top: 100px`;
    const Margin = styled.div` padding-bottom: 100px;`;

  return (
    <div> 
     <Title1>Check out our camping gear</Title1>
     <FeaturetteDivider />
     <Margin>
      <div className="container">
        <div className="row mb-2 align-items-stretch">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  Camping Gear
                </strong>
                <div className="mb-1 text-primary-emphasis">New!</div>
                <h3 className="mb-0">Tent</h3>
                <p className="card-text mb-auto">
                  This is a wider and spacious tent for 3 people, perfect for your
                  camping trips!
                </p>
                <a
                  href="https://square.link/u/ukS5PlMP"
                  target="_blank"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >Buy Now
                </a>
              </div>
              <div className="col-auto d-flex align-items-center">
                <img
                  className="img-fluid imgPadding"
                  src="../images/tent.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Outdoor Living
                </strong>
                <div className="mb-1 text-primary-emphasis">New!</div>
                <h3 className="mb-0">Camping Kitchen</h3>
                <p className="mb-auto">
                  Inside this tiny box is everything you will need to cook dinner
                  for you and your friends!
                </p>
                <a
                  href="https://square.link/u/VuSUBqMa"
                  target="_blank"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Buy Now
                </a>
              </div>
              <div className="col-auto d-flex align-items-center">
                <img
                  className="img-fluid imgPadding"
                  src="../images/kitchen.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2 align-items-stretch">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  Outdoor Living
                </strong>
                <h3 className="mb-0">Sleeping Bags</h3>
                <p className="card-text mb-auto">
                  Our all season Sleeping Bags are designed for 35-50 Degrees
                  Fahrenheit, weather-resistant design to keep you warm even in
                  extreme conditions.
                </p>
                <a
                  href="https://square.link/u/fjeBwtl4"
                  target="_blank"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Buy Now
                </a>
              </div>
              <div className="col-auto d-flex align-items-center">
                <img
                  className="img-fluid imgPadding"
                  src="../images/sleepingBag.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Outdoor Living
                </strong>
                <div className="mb-1 text-primary-emphasis">New!</div>
                <h3 className="mb-0">Double Sleeping Bag</h3>
                <p className="mb-auto">
                  Warmth, coziness and an enveloping hug, what else can you want
                  while you are missing your bed the most!
                </p>
                <a
                  href="https://square.link/u/ZWm1shW9"
                  target="_blank"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Buy Now
                </a>
              </div>
              <div className="col-auto d-flex align-items-center">
                <img
                  className="img-fluid imgPadding"
                  src="../images/futon.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Margin>
    </div>
  )
}

export default Camping