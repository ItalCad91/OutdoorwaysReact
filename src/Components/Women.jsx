import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchBar from './SearchBar/SearchBar';

const Women = () => {
  const [searchInput, setSearchInput] = useState("");
  const products = [
    {
      imageSrc: "../images/WomenBoots.png",
      name: "Hiking Boots",
      description: "Durable and comfortable footwear designed for long hikes and uneven terrain, offering ample support and grip for a more secure footing.",
      price: "$79.99",
      link: "/WomenHikingBoots",
    },
    {
      imageSrc: "../images/WomenRaincoat.png",
      name: "Waterproof Jacket",
      description: "A lightweight, breathable jacket that protects against wet weather conditions while ensuring optimal ventilation and mobility for outdoor activities.",
      price: "$59.99",
      link: "/WomenWaterProofJacket",
    },
    {
      imageSrc: "../images/Pole.png",
      name: "Trekking Poles",
      description: "Adjustable and lightweight poles that provide stability and balance while walking on rugged terrain or steep inclines, reducing the impact on knees and joints.",
      price: "$35.00",
      link: "/WomenTrekkingPoles",
    },
    {
      imageSrc: "../images/hat.png",
      name: "Outdoor Trekking Hat",
      description: "A wide-brimmed hat with UPF sun protection, designed to shield your face, neck, and shoulders from harmful UV rays while keeping you cool and comfortable.",
      price: "$9.99",
      link: "/WomenTrekkingHat",
    },
    {
      imageSrc: "../images/Bottle.png",
      name: "Insulated 1 gallon Water Bottle",
      description: "A vacuum-sealed bottle that keeps drinks cold or hot for hours, made of high-quality materials that are resistant to leaks and spills.",
      price: "$29.99",
      link: "/WomenWaterBottle",
    },
    {
      imageSrc: "../images/Softshell.png",
      name: "Softshell Jacket",
      description: "A stretchy and versatile jacket that provides protection from wind, light rain, and moderate temperatures, suitable for a wide range of outdoor activities.",
      price: "$39.99",
      link: "/WomenSoftshellJacket",
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
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Buy the best quality products at the lowest price."
      />
      <meta name="keywords" content="products, online shopping, discounts" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <div className="container my-5">
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-12">
            <h2 className="mb-4 text-center">
              Welcome to Outdoorways Women section
            </h2>
            <p className="text-center lead">
              Discover the best quality products at unbeatable prices. Our
              online store offers a wide range of products, from fashion and
              beauty to home and electronics. With fast and reliable shipping,
              you can shop with confidence and ease. Plus, take advantage of our
              exclusive discounts and deals. Start shopping now and enjoy the
              ultimate online shopping experience.
            </p>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <main className="container my-5" style={{ padding: "100px" }}>
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
              link={product.link}
            />
          ))}
        </main>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  hr \n  {\n  border-top: 3px solid #333;\n  }\n  \n  .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16m-7 6h7'/%3E%3C/svg%3E\");\n}\n"
          }}
        />
      </div>
    </>
  );
};

const Product = ({ imageSrc, name, description, price, link }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <img src={imageSrc} alt="Product Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{name}</h1>
          <p className="text-muted">{description}</p>
          <p className="font-weight-bold">{price}</p>
          <div className="d-flex">
            <button
              className="btn btn-primary mr-2"
              onClick={handleClick}
            >
              See Product Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
