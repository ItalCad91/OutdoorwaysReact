import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  padding-bottom: 3rem;
  color: #5a5a5a;
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
              src="../images/Adventure.jpg"
              alt="logo"
              width="100%"
              height="auto"
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
                  <a className="btn btn-lg btn-primary" href="#redirect">
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

      <br />
      <br />
      <FeaturetteHeading style={{ textAlign: "center" }} id="redirect">
        Check out our camping gear
      </FeaturetteHeading>
      <FeaturetteDivider />
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
                >
                  Buy Now
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
      <br />
      <br />
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
