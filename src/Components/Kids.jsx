import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      link: "/BootsKids",
    },
    {
      imageSrc: "../images/softshellKid.png",
      name: "SoftShell Jacket",
      description: "A stretchy and versatile jacket that provides protection from wind, light rain, and moderate temperatures, suitable for a wide range of outdoor activities.",
      price: "$25.99",
      link: "/softshellKid",
    },
    {
      imageSrc: "../images/trekkingPoleKids.png",
      name: "Trekking Poles",
      description: "Adjustable and lightweight poles that provide stability and balance while walking on rugged terrain or steep inclines, reducing the impact on knees and joints.",
      price: "$19.99",
      link: "/trekkingPoleKids",
    },
    {
      imageSrc: "../images/hatKid.png",
      name: "Kids Hiking Hat",
      description: "A wide-brimmed hat with UPF sun protection, designed to shield your face, neck, and shoulders from harmful UV rays while keeping you cool and comfortable.",
      price: "$9.99",
      link: "/hatKids",
    },
    {
      imageSrc: "../images/bottleKids.png",
      name: "Insulated Camping Water Bottle",
      description: "A vacuum-sealed bottle that keeps drinks cold or hot for hours, made of high-quality materials that are resistant to leaks and spills.",
      price: "$15.00",
      link: "/bottleKids",
    },
    // Add more products here
  ];

  const handleSearch = (query) => {
    setSearchInput(query);
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

export default Kids;

// TRYING CJDROPSHIPPING API:

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import SearchBar from './SearchBar/SearchBar';

// const Kids = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           'https://developers.cjdropshipping.com/api2.0/v1/product/list?pageNum=1&pageSize=20', {
//           headers: {
//             'CJ-Access-Token': '57176f9d71ba4bfdadde5cdb8783999e',
//           },
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }

//         const data = await response.json();
//         setProducts(data.data.list);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = (query) => {
//     setSearchInput(query);
//   };

//   const clearSearch = () => {
//     setSearchInput("");
//   };

//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <>
//       <div className="container my-5">
//         <div className="row" style={{ marginTop: "150px" }}>
//           <div className="col-md-12">
//             <h2 className="mb-4 text-center">
//               Welcome to Outdoorways Kids section
//             </h2>
//             <p className="text-center lead">
//               Discover the best quality products at unbeatable prices. Our
//               online store offers a wide range of products, from fashion and
//               beauty to home and electronics. With fast and reliable shipping,
//               you can shop with confidence and ease. Plus, take advantage of our
//               exclusive discounts and deals. Start shopping now and enjoy the
//               ultimate online shopping experience.
//             </p>
//           </div>
//         </div>
//         <SearchBar onSearch={handleSearch} />
//         <main style={{ padding: "100px" }}>
//           {loading ? (
//             <p>Loading products...</p>
//           ) : error ? (
//             <p>Error: {error.message}</p>
//           ) : (
//             filteredProducts.map((product, index) => (
//               <Product
//                 key={index}
//                 imageSrc={product.productImage}
//                 name={product.productName}
//                 description={product.remark}
//                 price={`$${product.sellPrice}`}
//                 link={`https://your-product-link-here.com/${product.pid}`}
//               />
//             ))
//           )}
//         </main>
//       </div>
//     </>
//   );
// };

// const Product = ({ imageSrc, name, description, price, link }) => {
//   return (
//     <>
//       <hr />
//       <div className="row">
//         <div className="col-md-6">
//           <img src={imageSrc} alt="Product Image" className="img-fluid" />
//         </div>
//         <div className="col-md-6">
//           <h1 className="mb-3">{name}</h1>
//           <p className="text-muted">{description}</p>
//           <p className="font-weight-bold">{price}</p>
//           <div className="d-flex">
//             <button
//               className="btn btn-primary mr-2"
//               onClick={() => window.open(link, '_blank')}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Kids;

