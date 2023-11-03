import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FooterText = styled.p`
  color: white;
  text-decoration: none;
  margin: 0;
  padding: 5px;
  text-align: center;
`;

const CopyrightText = styled.span`
  color: white;
`;

const PrivacyLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  padding: 5px;
  text-align: center;
`;

const SocialMediaSection = styled.div`
  margin-top: 10px;
`;

const SocialMediaLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 24px;
`;

function Footer() {
  return (
    <FooterWrapper className="fixed-bottom">
      <div className="container-fluid">
        <FooterContent>
          <div>
            <FooterText>
              <CopyrightText>©️ Copyright Outdoorways 2020</CopyrightText>
            </FooterText>
          </div>
          <SocialMediaSection>
          <SocialMediaLink
            href="https://www.facebook.com/people/Outdoorways/100067895288678/"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com/outdoorway_ca/"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.pinterest.com"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.tiktok.com"
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </SocialMediaLink>
        </SocialMediaSection>
          <div>
            <PrivacyLink to="/Privacy">Privacy</PrivacyLink>
            <PrivacyLink to="/Privacy">Returns Policy</PrivacyLink>
            <PrivacyLink to="/Privacy">Terms&Conditions</PrivacyLink>
            <PrivacyLink to="/Privacy">Shipping</PrivacyLink>
          </div>
        </FooterContent>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
