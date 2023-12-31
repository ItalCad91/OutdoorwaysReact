import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchBar from './SearchBar/SearchBar';

const Men = () => {
  const [searchInput, setSearchInput] = useState("");
  const products = [
    {
      imageSrc: "../images/bootsMen.png",
      name: "Hiking Boots",
      description: "Durable and comfortable footwear designed for long hikes and uneven terrain, offering ample support and grip for a more secure footing.",
      price: "$98.00",
      link: "/MenHikingBoots",
    },
    {
      imageSrc: "../images/softshellMen.png",
      name: "Softshell Jacket",
      description: "A stretchy and versatile jacket that provides protection from wind, light rain, and moderate temperatures, suitable for a wide range of outdoor activities.",
      price: "$99.99",
      link: "/MenSoftShellJacket",
    },
    {
      imageSrc: "../images/Pole.png",
      name: "Trekking Poles",
      description: "Adjustable and lightweight poles that provide stability and balance while walking on rugged terrain or steep inclines, reducing the impact on knees and joints.",
      price: "$35.00",
      link: "/MenTrekkingPoles",
    },
    {
      imageSrc: "../images/hatMen.png",
      name: "Outdoor Trekking Hat",
      description: "A wide-brimmed hat with UPF sun protection, designed to shield your face, neck, and shoulders from harmful UV rays while keeping you cool and comfortable.",
      price: "$9.99",
      link: "/MenTrekkingHat",
    },
    {
      imageSrc: "../images/Bottle.png",
      name: "Insulated Camping Water Bottle",
      description: "A vacuum-sealed bottle that keeps drinks cold or hot for hours, made of high-quality materials that are resistant to leaks and spills.",
      price: "$29.99",
      link: "/MenInsulatedWaterBottle",
    },
    // Add more products here
  ];

  const handleSearch = (query) => {
    setSearchInput(query);
  };


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  ); // CASE SENSITIVITY FUNCTION TO HANDLE UPPER AND LOWER CASE SEARCHES



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
            <h2 className="mb-4 text-center">Welcome to Outdoorways Men section</h2>
            <p className="text-center lead">
              Discover the best quality products at unbeatable prices. Our online
              store offers a wide range of products, from fashion and beauty to home
              and electronics. With fast and reliable shipping, you can shop with
              confidence and ease. Plus, take advantage of our exclusive discounts
              and deals. Start shopping now and enjoy the ultimate online shopping
              experience.
            </p>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <main style={{ padding: "100px" }}>
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
          <img src={imageSrc} alt="Product Image" className="img-fluid product-image" />
        </div>
        <div className="col-md-6 product">
          <h1 className="mb-3 product-name">{name}</h1>
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

export default Men;
