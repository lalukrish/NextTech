import { Modal, Typographym, Card, Typography, Box } from '@mui/material';
import React from 'react';
import myPostsSservice from './my-posts-service'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyPostCardMoal = ({ open, handleModalClose}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={myPostsSservice} alt="Full View" style={{ maxWidth: '100%', maxHeight: '50vh' }} />
        </Box>
      </Modal>
    </div>
  );
};

export default MyPostCardMoal;
