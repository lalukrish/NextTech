import {React, useState} from 'react';
import { Card, CardContent, Modal, Typography, Button, TextField, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add'; // Import the Add icon
import WorkIcon from '@mui/icons-material/Work'; // Import the Work icon
import BookIcon from '@mui/icons-material/Book'; // Import the Book icon


import Avatar from '@mui/material/Avatar';




  const SimpleCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    <div>
      <Card style={{ width: '100%', paddingTop: '25.25%', position: 'relative' }}>
        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <TextField
                variant="outlined"
                label="Search"
                style={{ width: '70%', marginRight: '10px', marginTop: '10px' }}
              />
              <Button variant="contained" color="primary">
                Search
              </Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: '70px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                component="a"
                href="/addpost"
              >
                <IconButton color="primary" size="small" style={{ marginRight: '10px' }}>
                  <AddIcon fontSize="small" style={{ color: 'white' }} />
                </IconButton>
                Add Post
              </Button>

              <Button variant="contained" size="medium" color="primary" style={{ marginLeft: '14px', height: '70px' }}>
                <IconButton color="primary" size="small">
                  <AddIcon fontSize="small" style={{ color: 'white' }} />
                </IconButton>
                Single Line
              </Button>
              <Button variant="contained" size="medium" color="primary" style={{ marginLeft: '16px', height: '70px' }}>
                <IconButton color="primary" size="small">
                  <WorkIcon fontSize="small" style={{ color: 'white' }} />
                </IconButton>
                Work Job
              </Button>
              <Button variant="contained" size="medium" color="primary" style={{ marginLeft: '18px', height: '70px' }}>
                <IconButton color="primary" size="small">
                  <BookIcon fontSize="small" style={{ color: 'white' }} />
                </IconButton>
                VBook
              </Button>

              <NotificationsIcon
              style={{ fontSize: '40px',marginLeft: '38px', color: 'blue', cursor: 'pointer' }}
              onClick={openModal}
            />
            
              <Avatar alt="User Avatar" src="/avatar.jpg" size="large" sx={{ marginLeft: '50px', weight: '70px', height: '50px' }} />
            </div>
          </div>
        </CardContent>
      </Card>
      <Modal open={isModalOpen} onClose={closeModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', outline: 'none' }}>
          <Typography variant="h5">Notifications</Typography>
          {/* Add your notification content here */}
          <Button variant="contained" color="primary" onClick={closeModal}>
            Close
          </Button>
        </div>
      </Modal>
    </div>

  );
};

export default SimpleCard;
