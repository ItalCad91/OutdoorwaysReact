import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function CarouselComponent() {
  const image1 = '/images/Camping.jpg';
  const image2 = '/images/Adventure.jpg';
  const image3 = '/images/Family.jpg';

  // Define a style object to set the maximum width and height of the image
  const imageStyle = {
    maxWidth: '100%', // Adjust the maximum width as needed
    maxHeight: '200px', // Adjust the maximum height as needed
  };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={image1} alt="Camping" style={imageStyle} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Adventure" style={imageStyle} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Family" style={imageStyle} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
