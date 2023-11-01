import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styled from 'styled-components';
import backIMG from '/images/CountactBack.jpg';

const Maindiv = styled.div`
  padding: 150px;
  background-image: url(${backIMG});
  background-size: 1700px 1850px;
  text-align: center; /* Center align the content */
`;

const CardsContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack cards vertically on smaller screens */
  align-items: center; /* Center content horizontally */
  gap: 20px; /* Spacing between cards */
  width:100%;
`;

const CardContainer = styled.div`
  background-color: ${props => (props.isBlue ? 'darkblue' : 'grey')};
  border: 2px solid #343a40; /* Border color for the card */
  border-radius: 10px;
  color: ${props => (props.isBlue ? 'white' : 'black')};
  width: 100%; /* Ensure cards take up full width */
  max-width: 700px; /* Adjust max-width for larger cards on small screens */
  padding: 20px; /* Add padding for better spacing */
`;

const InputForm = styled.input`
  color: black;
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  margin: 10px;
  color: black;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactInfo = styled.p`
  color: ${props => (props.isBlue ? 'white' : 'black')};
  word-wrap: break-word; /* Allow text to wrap within the container */
`;

const BigH = styled.h1`
  color: white;
`;

function ContactUs() {
  return (
    <>
      <Maindiv>
        <CardsContainer>
          <CardContainer isBlue>
            <BigH>Contact Us</BigH>
            <ContactInfo isBlue>☎️ +1 (123) 456-7890</ContactInfo>
            <ContactInfo isBlue>📧 outdoorways@cservice.com</ContactInfo>
            <hr />
            <InputForm placeholder="Name" />
            <InputForm placeholder="Email" />
            <InputForm placeholder="Phone Number" />
            <TextArea placeholder="Your Message" />
            <button>Submit</button>
            <button>Reset</button>
            <CardContainer>
            <BigH>Our Home</BigH>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1541.498227371839!2d-79.5862286518138!3d43.60600467958379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b479488074f15%3A0x4db412c5455a4d59!2s14-1248%20Dundas%20St%20E%2C%20Mississauga%2C%20ON%20L4Y%202C1!5e0!3m2!1sen!2sca!4v1698630462030!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContainer>
          </CardContainer>          
        </CardsContainer>
      </Maindiv>
    </>
  );
}

export default ContactUs;
