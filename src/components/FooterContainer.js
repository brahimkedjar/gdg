import React from "react";
import styled from "styled-components";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import discordIcon from "../assets/images/discord-icon.svg";

const FooterLine = styled.hr`
  width: 90%;
  color: white;
  text-align: center;
  margin: 4rem auto;
`;

const FooterText = styled.h3`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const FooterContainer = styled.footer`
  background: #121212;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 30px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const MediaCard = styled.a`
  border-radius: 15px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 40px;
    height: auto;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterLine />
    <FooterText>Follow us on our social networks</FooterText>
    <Grid>
      <MediaCard
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookIcon} alt="Facebook logo" />
      </MediaCard>
      <MediaCard
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="Instagram logo" />
      </MediaCard>
      <MediaCard
        href="https://www.discord.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discordIcon} alt="Discord logo" />
      </MediaCard>
    </Grid>
  </FooterContainer>
);
