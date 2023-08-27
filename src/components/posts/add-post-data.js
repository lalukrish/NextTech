import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const AddPostData = () => {
  const userId = localStorage.getItem('USER_ID');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('title', title);
    formData.append('location', location);
    formData.append('image', image);

    try {
      const response = await axios.post(`${process.env.REACT_APP_NEXTTECH_DEV_URL}/create_post`, formData);
      console.log('Post successful', response.data);
      setTitle('');
      setLocation('');
      setImage(null);
    } catch (error) {
      console.error('Error posting', error);
    }
  };

  return (
    <Card>
      {image && <CardMedia component="img" alt="Chosen Image" height="300" image={URL.createObjectURL(image)} />}
      <CardContent>
        <TextField label="Title" fullWidth value={title} onChange={handleTitleChange} />
        <TextField label="Location" fullWidth value={location} onChange={handleLocationChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button variant="contained" color="primary" onClick={handlePost}>
          Post
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddPostData;
