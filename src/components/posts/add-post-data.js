import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const AddPostData = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('/create_post', formData);
      console.log('Post successful', response.data);
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error posting', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow: '1px 3px 6px rgba(0.16, 0.16, 0.16, 0.16)' }}>
    <Card sx={{ width: '800px', height: '600px', mt: '1px' }}>
      {image && (
        <CardMedia
          component="img"
          alt="Chosen Image"
          height="300"
          image={URL.createObjectURL(image)}
        />
      )}
      <CardContent>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button variant="contained" color="primary" onClick={handlePost}>
          Post
        </Button>
      </CardContent>
    </Card>
    </div>
  );
};

export default AddPostData;
