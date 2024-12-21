import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import timeline from "../assets/images/timeline_tempo.svg";

const ScheduleContainer = styled.section`
  width: 100%;
  padding: 50px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #181717, #121212);
`;

const Header = styled(motion.h2)`
  font-size: 4rem;
  color: #efece6;
  margin-bottom: 0;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text; /* Clip the background to the text */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
    display: inline-block; /* Ensure the gradient applies properly */
  }
`;

const SubHeader = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #f0f8ff;
  margin: 0 0 5rem 0;
  text-align: center;
`;
const SubHeader2 = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #f0f8ff;
  margin: 2rem 0 5rem 0;
  text-align: center;
`;

const TimelineImage = styled(motion.img)`
  width: 98%; /* Takes the full width of the container */
  max-width: 100%; /* Prevents it from exceeding 100% of the container */
  height: auto; /* Maintains aspect ratio */
  display: block; /* Avoids any inline spacing issues */
  margin: 0;
  margin-bottom: 40px;
  overflow-x: hidden; /* Ensures no horizontal overflow */
`;

export const Schedule = () => {
  return (
    <ScheduleContainer>
      <Header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>Time</span>line
      </Header>

      <SubHeader
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Day 1
      </SubHeader>
      <TimelineImage
        src={timeline}
        alt="Day 1 Timeline"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />

      <SubHeader2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Day 2
      </SubHeader2>
      <TimelineImage
        src={timeline}
        alt="Day 2 Timeline"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />
    </ScheduleContainer>
  );
};
