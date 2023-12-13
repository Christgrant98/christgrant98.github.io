import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import CopyEmail from './CopyEmail';
import CopyPhoneNumber from './CopyNumber';
import { Bio } from '../../data/constants';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const IconText = styled.span`
  margin-left: 8px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities! 🚀</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Contact Me 🎯</ContactTitle>
          <CopyEmail />
          <CopyPhoneNumber />
          <SocialMediaIcon as={Link} to={Bio.github} target="display">
            <GitHubIcon />
            <IconText>Christgrant98</IconText>
          </SocialMediaIcon>
          <SocialMediaIcon as={Link} to={Bio.linkedin} target="display">
            <LinkedInIcon />
            <IconText>https://www.linkedin.com/in/christian-garcerant/</IconText>
          </SocialMediaIcon>
        </ContactForm>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="Email sent successfully!" severity="success" />
      </Wrapper>
    </Container>
  );
};

export default Contact;
