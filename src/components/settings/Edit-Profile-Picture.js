import { Avatar, Backdrop, Box, CardContent, CircularProgress, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import React, { useState } from 'react';
import EditProfileService from './setting-service/edit-profile-service';

const EditProfilePicture = () => {
  const userId=localStorage.getItem("USER_ID")
  const [image, setImage] = useState();
  const handleFileChnage = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };
  console.log('file', image);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select a file');
      return; // This return statement is necessary if there is no image selected
    }
    const formData = new FormData();
    formData.append('image', image);
     formData.append('id',userId)
    EditProfileService(formData).then((response) => {
      const data = response;
      console.log('data', data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <CardContent>
          update profile image
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative' }}>
              <Avatar
                // src={`${process.env.NEXT_PUBLIC_CORE_HOST}/profile-image-download/mpi/${profileImageId}`}
                src="https://imgs.search.brave.com/WRxQQjbnYomMxAR5Zyd8vhzAHIt528uFBJH00tchops/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MDU2Njg0L3Bob3Rv/L2NvbG9yLWluay1p/bi13YXRlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YjhX/VS1nb0ZYWTFjOGJM/QXpQdF9fVUg2M1FZ/S2QxU3pVREtNNnNG/Rm5Wbz0"
                sx={{
                  height: 100,
                  backgroundColor: 'black',
                  width: 100,
                }}
              />

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: -10,
                }}
              >
                <input hidden name="avatar" type="file" onChange={handleFileChnage} />
                <CameraAltIcon />
              </IconButton>
            </div>
          </Box>
        </CardContent>
        <Button type="submit" color="primary">
          update
        </Button>
      </form>
    </>
  );
};

export default EditProfilePicture;
