import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';


const CopyEmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Adjust the gap as needed */
`;

const EmailText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const CopyEmailButton = styled(Button)`
  width: 5%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 900;
`;


const CopyEmail = () => {
  const WhiteEmailIcon = styled(EmailIcon)`
  color: white;
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
