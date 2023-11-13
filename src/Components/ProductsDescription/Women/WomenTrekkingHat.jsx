import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// Styled components
const Container = styled.div`
  margin: 150px;
  font-size: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const ProductName = styled.h1`
  font-size: 30px;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 24px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const ButtonStyle = css`
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: white;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    background-color: red;
    color: white;
  `}

  &:hover {
    background-color: red;
  }
`;

const ButtonColor = styled.button`${ButtonStyle}`;
const ButtonSize = styled.button`${ButtonStyle}`;

const ButtonPurchase = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ShowReviewButton = styled.button`
  padding: 10px 15px;
  margin-bottom: 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReviewSection = styled.div`
  margin-top: 30px;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const ReviewInput = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
`;

const StarRating = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReviewsDisplay = styled.div`
  margin-top: 30px;
`;

const ReviewItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff6347;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;

// Component
function WomenHat() {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const localStorageKey = 'WomenHatReviews';

  useEffect(() => {
    const loadedReviews = localStorage.getItem(localStorageKey);
    if (loadedReviews) {
      setReviews(JSON.parse(loadedReviews));
    }
  }, []);

  const handlePurchase = () => {
    if (!size || !color) {
      alert('Please select both a size and a color.');
      return;
    }
    window.open("https://square.link/u/fX3BKclp", "_blank");
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviews = [...reviews, { review, rating }];
    setReviews(newReviews);
    localStorage.setItem(localStorageKey, JSON.stringify(newReviews));
    setReview('');
    setRating(0);
    setShowReviewForm(false);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, reviewIndex) => reviewIndex !== index);
    setReviews(updatedReviews);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedReviews));
  };

  return (
    <Container>
      <ProductName>Outdoor Trekking Hat</ProductName>
      <ProductImage src="../images/hat.png" alt="men boots" />
      <Description>
      A wide-brimmed hat with UPF sun protection, designed to shield your face, neck, and shoulders from harmful UV rays while keeping you cool and comfortable
      </Description>
      <Price>$9.99</Price>
      <div>
        <ButtonSize onClick={() => setSize('4')} selected={size === '4'}>4</ButtonSize>
        <ButtonSize onClick={() => setSize('4.5')} selected={size === '4.5'}>4.5</ButtonSize>
        <ButtonSize onClick={() => setSize('5')} selected={size === '5'}>5</ButtonSize>
        <ButtonSize onClick={() => setSize('5.5')} selected={size === '5.5'}>5.5</ButtonSize>
        <ButtonSize onClick={() => setSize('6')} selected={size === '6'}>6</ButtonSize>
        <ButtonSize onClick={() => setSize('6.5')} selected={size === '6.5'}>6.5</ButtonSize>
        <ButtonSize onClick={() => setSize('7')} selected={size === '7'}>7</ButtonSize>
        <ButtonSize onClick={() => setSize('7.5')} selected={size === '7.5'}>7.5</ButtonSize>
        <ButtonSize onClick={() => setSize('8')} selected={size === '8'}>8</ButtonSize>
      </div>
      <div>
        <ButtonColor onClick={() => setColor('Red')} selected={color === 'Red'}>Red</ButtonColor>
        <ButtonColor onClick={() => setColor('Blue')} selected={color === 'Blue'}>Blue</ButtonColor>
        <ButtonColor onClick={() => setColor('Green')} selected={color === 'Green'}>Green</ButtonColor>
      </div>
      <ButtonPurchase onClick={handlePurchase}>🛒 Purchase</ButtonPurchase>
      
      <ShowReviewButton onClick={() => setShowReviewForm(!showReviewForm)}>
        {showReviewForm ? 'Hide Review Form' : 'Add a Review'}
      </ShowReviewButton>

      {showReviewForm && (
        <ReviewSection>
          <h2>Write a Review</h2>
          <ReviewForm onSubmit={handleReviewSubmit}>
            <StarRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton key={star} onClick={() => setRating(star)}>
                  {star <= rating ? '★' : '☆'}
                </StarButton>
              ))}
            </StarRating>
            <ReviewInput
              rows="4"
              placeholder="Enter your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <SubmitButton type="submit">Submit Review</SubmitButton>
          </ReviewForm>
        </ReviewSection>
      )}

      <ReviewsDisplay>
        <h2>Customer Reviews</h2>
        {reviews.map((item, index) => (
          <ReviewItem key={index}>
            <div>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
            <p>{item.review}</p>
            <DeleteButton onClick={() => handleDeleteReview(index)}>Delete</DeleteButton>
          </ReviewItem>
        ))}
      </ReviewsDisplay>
    </Container>
  );
}

export default WomenHat;
