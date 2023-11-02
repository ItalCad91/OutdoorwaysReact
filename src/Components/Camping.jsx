import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import SearchBar from './SearchBar/SearchBar';

const Camping = () => {
  const [searchInput, setSearchInput] = useState("");
  const FeaturetteDivider = styled.hr`margin: 5rem 0;`;
  const Title1 = styled.h1`text-align: center; color: grey; padding-top: 100px`;
  const Margin = styled.div` padding-bottom: 100px;`;

  const products = [
    {
      imageSrc: "../images/tent.png",
      name: "Tent",
      description: "This is a wider and spacious tent for 3 people, perfect for your camping trips!",
      price: "Buy Now",
      link: "https://square.link/u/ukS5PlMP",
    },
    {
      imageSrc: "../images/kitchen.png",
      name: "Camping Kitchen",
      description: "Inside this tiny box is everything you will need to cook dinner for you and your friends!",
      price: "Buy Now",
      link: "https://square.link/u/VuSUBqMa",
    },
    {
      imageSrc: "../images/sleepingBag.png",
      name: "Sleeping Bags",
      description: "Our all-season Sleeping Bags are designed for 35-50 Degrees Fahrenheit, weather-resistant design to keep you warm even in extreme conditions.",
      price: "Buy Now",
      link: "https://square.link/u/fjeBwtl4",
    },
    {
      imageSrc: "../images/futon.png",
      name: "Double Sleeping Bag",
      description: "Warmth, coziness, and an enveloping hug, what else can you want while you are missing your bed the most!",
      price: "Buy Now",
      link: "https://square.link/u/ZWm1shW9",
    },
    // Add more products here
  ];

  const handleSearch = (query) => {
    setSearchInput(query);
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <Title1>Check out our camping gear</Title1>
      <FeaturetteDivider />
      <Margin>
        <div className="container">
          <SearchBar onSearch={handleSearch} />
          <div className="row mb-2 align-items-stretch">
            {filteredProducts.map((product, index) => (
              <div key={index} className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-100 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">
                      Camping Gear
                    </strong>
                    <div className="mb-1 text-primary-emphasis">New!</div>
                    <h3 className="mb-0">{product.name}</h3>
                    <p className="card-text mb-auto">{product.description}</p>
                    <a
                      href={product.link}
                      target="_blank"
                      className="icon-link gap-1 icon-link-hover stretched-link"
                    >
                      {product.price}
                    </a>
                  </div>
                  <div className="col-auto d-flex align-items-center">
                    <img
                      className="img-fluid imgPadding"
                      src={product.imageSrc}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Margin>
    </div>
  );
};

export default Camping;
