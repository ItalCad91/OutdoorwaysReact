import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MainWrapper = styled.main`
  padding-bottom: 100px;
  color: #5a5a5a;
  margin-bottom: 50px;

`;

const Carousel = styled.div`
  margin-bottom: 4rem;
`;

const CarouselCaption = styled.div`
  bottom: 3rem;
  z-index: 10;
`;

const CarouselItem = styled.div`
  height: 32rem;
`;

const FeaturetteDivider = styled.hr`
  margin: 5rem 0;
`;

const FeaturetteHeading = styled.h2`
  letter-spacing: -0.05rem;
  margin-top: 3rem; /* Add margin to move the section up */

  @media (min-width: 40em) {
    font-size: 50px;
  }

  @media (min-width: 62em) {
    margin-top: 7rem;
  }
`;

function Home() {
  return (
    <MainWrapper>
      <Carousel id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <CarouselItem className="carousel-item active">
            <img
              className="imgPadding"
              src="../images/Adv1.jpg"
              alt="logo"
              width="100%"
              height="700px"
            />
            <div className="container">
              <CarouselCaption className="carousel-caption">
                <h1>Get ready for your next adventure!</h1>
                <p>
                  Find the best deals on high-quality hiking gear and apparel at our
                  outdoor ecommerce store.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="men">
                    Shop Now
                  </a>
                </p>
              </CarouselCaption>
            </div>
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              className="imgPadding"
              src="../images/Camping.jpg"
              alt="logo"
              width="100%"
              height="auto"
            />
            <div className="container">
              <CarouselCaption className="carousel-caption">
                <h1>Camp in comfort with our top-of-the-line gear.</h1>
                <p>
                  From tents to sleeping bags to cookware, we've got everything you
                  need for a successful camping trip.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="camping">
                    Shop Now
                  </a>
                </p>
              </CarouselCaption>
            </div>
          </CarouselItem>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </Carousel>
      <FeaturetteHeading style={{ textAlign: "center" }}>
        Discover inspiration!
      </FeaturetteHeading>
      <p style={{ textAlign: "center" }}>
        Explore our Stories section for weekly outdoor living suggestions. Get
        creative and embark on your adventure now!
      </p>
      <div className="container">
        <FeaturetteDivider />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Shop for Your Next Outdoor Adventure with Family.{" "}
              <span className="text-muted">
                Everything You Need for an Unforgettable Experience.
              </span>
            </h2>
            <p className="lead">
              At our outdoor ecommerce store, we offer a wide selection of gear
              and equipment for your next family adventure. From hiking and
              camping gear to outdoor apparel and accessories, we have everything
              you need to make your next trip a memorable one. Whether you're
              planning a weekend camping trip or a multi-day hiking expedition,
              our store has the products and expertise to help you make the most
              of your outdoor experience with your loved ones. Browse our
              selection today and start planning your next adventure!
            </p>
          </div>
          <div className="col-md-5 order-md-1 align-self-center">
            <div className="text-center">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid"
                src="../images/Family.jpg"
                width={500}
                height={500}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <FeaturetteDivider />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Find Inspiration, Expert Advice, and More.{" "}
              <span className="text-muted">Check our Blog</span>
            </h2>
            <p className="lead">
              At Outdoorways, we're passionate about helping people connect with
              nature and make the most of their time outside. Our website offers a
              wealth of resources to help you plan your next adventure, including
              articles on outdoor activities, expert advice on gear and equipment,
              and community forums where you can connect with other outdoor
              enthusiasts. We also offer a wide selection of products to help you
              get the most out of your outdoor experience, from hiking and camping
              gear to outdoor apparel and accessories. Whether you're a seasoned
              outdoor adventurer or just starting to explore, our website has
              everything you need to make your time outside more enjoyable and
              memorable. Explore our site today and discover all the ways we can
              help you connect with the great outdoors.
            </p>
          </div>
          <div className="col-md-5 order-md-1 align-self-center">
            <div className="text-center">
              <img
                src="../images/Inspired.jpg"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid"
                width={500}
                height={500}
                alt="Outdoor Inspiration"
              />
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Home;
