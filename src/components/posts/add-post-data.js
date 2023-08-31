import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, CardMedia } from '@mui/material';
import Alert from '@mui/material/Alert';

import axios from 'axios';


const AddPostData = () => {

  const navigate=useNavigate()
  const userId = localStorage.getItem('USER_ID');
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

  const [alert,setAlert]= useState("")


  const handlePost = async () => {
    const formData = new FormData();
    formData.append('id', userId);
    formData.append('post_title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post(`${process.env.REACT_APP_NEXTTECH_DEV_URL}/create_post`, formData).then((response)=>{
        console.log('Post successful', response.data);
        const data=response.data
        setAlert(data.message)
        setTitle('');
        setDescription('');
        setImage(null);
      navigate("/dashboard/blog")
      });
    
    } catch (error) {
      console.error('Error posting', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '1px 3px 6px rgba(0.16, 0.16, 0.16, 0.16)',
      }}
    >
      <Card sx={{ width: '800px', height: '600px', mt: '1px' }}>
        {image && <CardMedia component="img" alt="Chosen Image" height="300" image={URL.createObjectURL(image)} />}
        <CardContent>
          <TextField label="Title" fullWidth value={title} onChange={handleTitleChange} />
          <TextField label="Description" fullWidth value={description} onChange={handleDescriptionChange} />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <Button variant="contained" color="primary" onClick={handlePost}>
            Post
          </Button>
        </CardContent>
     
      </Card>
      <Alert severity="success" sx={{
        mt:30,justifyContent:"center",alignContent:"center"
      }}>
      
      {alert}<strong>check it out!</strong>
    </Alert>
    </div>
  );
};

export default AddPostData;
