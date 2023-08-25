import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardActions, CardHeader, IconButton, Typography } from '@mui/material';
import { Favorite as FavoriteIcon, ChatBubbleOutline as ChatBubbleOutlineIcon } from '@mui/icons-material';

const BlogPageResults = () => {

  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://mcdn.wallpapersafari.com/medium/71/10/swLKmC.jpg', likes: 10, comments: ['Nice!', 'Love it!'] },
    { id: 2, imageUrl: 'https://mcdn.wallpapersafari.com/medium/79/92/6309Gb.jpg', likes: 15, comments: ['Amazing!', 'Keep it up!'] },
    // ... more posts
  ]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (

      <div>
        <Typography variant="h5">Posts</Typography>
        {posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: '20px' }}>
            <CardHeader
              avatar={<Avatar src={post.avatarUrl} alt={post.username} />}
              title={post.username}
            />
            <CardContent>
              <img src={post.imageUrl} alt="Post" style={{ width: '100%' }} />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton onClick={() => handleLike(post.id)}>
                <FavoriteIcon color="error" />
              </IconButton>
              <Typography>{post.likes}</Typography>
              <IconButton>
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography>{post.comments.length}</Typography>
            </CardActions>
          </Card>
        ))}
      </div>
  );
};

export default BlogPageResults;
