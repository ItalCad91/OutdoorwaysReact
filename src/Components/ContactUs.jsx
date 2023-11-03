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



// ALTERNATE VERSION OF CONTACT PAGE

//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// import React from 'react';
// import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <section className='border text-center mb-4'>
//       <h3 className='mb-5'>Contact us</h3>
//       <div className='row'>
//         <div className='col-lg-5'>
//           <iframe
//             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
//             className='h-100 w-100'
//             style={{ border: '0' }}
//             loading='lazy'
//           ></iframe>
//         </div>
//         <div className='col-lg-7'>
//           <form>
//             <div className='row'>
//               <div className='col-md-9'>
//                 <MDBRow className='mb-4'>
//                   <MDBCol>
//                     <MDBInput label='First name' id='form3FirstName' />
//                   </MDBCol>
//                   <MDBCol>
//                     <MDBInput label='Email Address' id='form3Email' />
//                   </MDBCol>
//                 </MDBRow>
//                 <MDBInput
//                   type='text'
//                   label='Subject'
//                   id='form3Subject'
//                   v-model='form3Subject'
//                   wrapperClass='mb-4'
//                 />
//                 <MDBTextArea label='Message' id='form3Textarea' wrapperClass='mb-4' />
//                 <MDBBtn color='primary' className='mb-4'>
//                   {' '}
//                   Send{' '}
//                 </MDBBtn>
//               </div>
//               <div className='col-md-3'>
//                 <ul className='list-unstyled'>
//                   <li>
//                     <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
//                     <p>
//                       <small>New York, NY 10012, USA</small>
//                     </p>
//                   </li>
//                   <li>
//                     <i className='fas fa-phone fa-2x text-primary'></i>
//                     <p>
//                       <small>+ 01 234 567 89</small>
//                     </p>
//                   </li>
//                   <li>
//                     <i className='fas fa-envelope fa-2x text-primary'></i>
//                     <p>
//                       <small>contact@gmail.com</small>
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }