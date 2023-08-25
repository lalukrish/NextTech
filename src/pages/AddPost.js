import React from 'react';
import { Card, CardContent } from '@mui/material';

import AddPostData from '../components/posts/add-post-data';

const AddPost = () => {
  return (
    <>
      <Card>
        <CardContent>addpost</CardContent>
        <AddPostData />
      </Card>
    </>
  );
};

export default AddPost;
