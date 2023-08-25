import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const SimpleCard = () => {
  const [followers, setFollowers] = useState(100); // Replace with your follower count

  const [openDialog, setOpenDialog] = useState(false);
  const [newPostText, setNewPostText] = useState('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddPost = () => {
    // Handle adding a new post
    // For this example, we're just updating the state and clearing the input
    setNewPostText('');
    handleCloseDialog();
  };

  return (
    <div>
      <Card style={{ width: '100%', paddingTop: '25.25%', position: 'relative' }}>
        <CardContent style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Typography variant="h6">Followers: {followers}</Typography>
          <Button variant="contained" color="primary" onClick={handleOpenDialog} style={{ marginTop: '10px' }}>
            Add Post
          </Button>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <TextField
            label="New Post"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddPost} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SimpleCard;
