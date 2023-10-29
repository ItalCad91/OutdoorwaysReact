import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.nav`
  background-color: darkblue;
`;

const FooterText = styled.p`
color: white;
padding: 20px;
text-align: center;
text-decoration: none;
`;

const CopyrightText = styled.span`
  color: withe;
`;

function Footer() {
  return (
    <FooterWrapper className="fixed-bottom">
      <div className="container-fluid">
        <FooterText>
          <CopyrightText>©️ Copyright Outdoorways 2023</CopyrightText>
        </FooterText>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
