import React, { useState } from "react";
import styled from "styled-components";
import contactPic from "../assets/images/gdg_balloons.svg";
import iconBg from "../assets/images/cloud.png";

const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-image: url(${iconBg});
  background-repeat: no-repeat;
  background-position: 50% 20%;
  background: #121212;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const GDGIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const IconImage = styled.div`
  width: 80%;
  height: 450px;
  background: url(${contactPic}) no-repeat center;
  background-size: contain;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  background: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormTitle = styled.h2`
  text-align: left;
  font-size: 2.5rem;
  color: #efece6;
  margin-bottom: 2rem;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NameFields = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  resize: none;
  height: 100px;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const SubmitButton = styled.button`
  background: #08f6f6;
  color: #121212;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #017373;
  }
`;

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate fields
    if (!firstName || !lastName || !email || !message) {
      setError("Please fill in all fields");
      return;
    }
  
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };
  
    try {
      const response = await fetch("https://brahimkedjarstore.epizy.com/send-contact-message.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "cors", // Ensure CORS mode is enabled
      });
  
      console.log(response); // Check response status
  
      const data = await response.json();
  
      if (data.success) {
        setSuccess("Your message has been sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.log(err); // Log the error to understand what went wrong
    }
  };
  
  return (
    <PageContainer>
      <ContentWrapper>
        <GDGIcon>
          <IconImage />
        </GDGIcon>
        <FormContainer>
          <FormTitle>
            Contact <span>us</span>
          </FormTitle>
          {success && <div>{success}</div>}
          {error && <div>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <NameFields>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </NameFields>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextArea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <SubmitButton type="submit">Send</SubmitButton>
          </Form>
        </FormContainer>
      </ContentWrapper>
    </PageContainer>
  );
};
