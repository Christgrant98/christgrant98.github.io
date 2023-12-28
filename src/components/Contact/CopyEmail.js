import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, IconButton, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';


const CopyEmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
`;

const EmailText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
`;

const CopyEmailButton = styled(IconButton)`
  height: 35px;
  width: 35px;
  text-decoration: none;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: ${({ theme }) => theme.text_primary};

  .MuiSvgIcon-root {
    color: white; 
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.hoverColor};
    }
  }
`;



const CopyEmail = () => {
  const WhiteEmailIcon = styled(EmailIcon)`
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

  const emailRef = useRef(null);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCopyClick = () => {
    const emailInput = emailRef.current;
    emailInput.select();
    document.execCommand('copy');
    setIsSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <CopyEmailContainer>
      <WhiteEmailIcon/>
      <EmailText>christian.garcerant@gmail.com</EmailText>
      <CopyEmailButton onClick={handleCopyClick} variant="contained">
        <ContentCopyIcon />
      </CopyEmailButton>
      <input
        ref={emailRef}
        type="text"
        value="christian.garcerant@gmail.com"
        readOnly
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={null}
        onClose={handleSnackbarClose}
        message="Email copied to clipboard!"
      />
    </CopyEmailContainer>
  );
};

export default CopyEmail;