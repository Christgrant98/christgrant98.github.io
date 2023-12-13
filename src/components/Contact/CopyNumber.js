import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CopyPhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PhoneNumberText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const CopyPhoneNumberButton = styled(Button)`
  width: 5%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  margin-left: auto; /* Set the button to the right */
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 900;
`;

const CopyPhoneNumber = () => {
  const WhiteWhatsappIcon = styled(WhatsAppIcon)`
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
    <CopyPhoneNumberContainer>
      <WhiteWhatsappIcon />
      <PhoneNumberText>+573013740207</PhoneNumberText>
      <CopyPhoneNumberButton onClick={handleCopyClick} variant="contained">
        <ContentCopyIcon />
      </CopyPhoneNumberButton>
      <input
        ref={emailRef}
        type="text"
        value="+573013740207"
        readOnly
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={null}
        onClose={handleSnackbarClose}
        message="Phone number copied to clipboard!"
      />
    </CopyPhoneNumberContainer>
  );
};

export default CopyPhoneNumber;
