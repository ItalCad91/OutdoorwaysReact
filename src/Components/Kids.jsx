import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchBar from './SearchBar/SearchBar';

const Kids = () => {
  const [searchInput, setSearchInput] = useState("");
  const products = [
    {
      imageSrc: "../images/bootsKid.png",
      name: "Hiking Boots",
      description: "Durable and comfortable footwear designed for long hikes and uneven terrain, offering ample support and grip for a more secure footing.",
      price: "$79.00",
      link: "https://square.link/u/CrSp5gkt",
    },
    {
      imageSrc: "../images/softshellKid.png",
      name: "SoftShell Jacket",
      description: "A stretchy and versatile jacket that provides protection from wind, light rain, and moderate temperatures, suitable for a wide range of outdoor activities.",
      price: "$25.99",
      link: "https://square.link/u/8uomZuN2",
    },
    {
      imageSrc: "../images/trekkingPoleKids.png",
      name: "Trekking Poles",
      description: "Adjustable and lightweight poles that provide stability and balance while walking on rugged terrain or steep inclines, reducing the impact on knees and joints.",
      price: "$29.99",
      link: "https://square.link/u/xy10wFFy",
    },
    {
      imageSrc: "../images/hatKid.png",
      name: "Kids Hiking Hat",
      description: "A wide-brimmed hat with UPF sun protection, designed to shield your face, neck, and shoulders from harmful UV rays while keeping you cool and comfortable.",
      price: "$9.99",
      link: "https://square.link/u/xeqOdmx2",
    },
    {
      imageSrc: "../images/bottleKids.png",
      name: "Insulated Camping Water Bottle",
      description: "A vacuum-sealed bottle that keeps drinks cold or hot for hours, made of high-quality materials that are resistant to leaks and spills.",
      price: "$15.00",
      link: "https://square.link/u/30xazO9V",
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
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <div className="container my-5">
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-12">
            <h2 className="mb-4 text-center">
              Welcome to Outdoorways Kids section
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
              onClick={() => window.open(link, '_blank')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kids;
