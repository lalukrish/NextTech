import React, { useState } from 'react';
import ImageViewModal from './ImageViewModal';

const AddComment = ({ imageSrc }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <img src={imageSrc} alt="Post" style={{ maxWidth: '100%', cursor: 'pointer' }} onClick={handleImageClick} />
      <ImageViewModal open={modalOpen} handleModalClose={handleModalClose} imageSrc={imageSrc} />
      <div>
        {comments.map((comment, index) => (
          <Card key={index} style={{ margin: '10px', padding: '5px' }}>
            <Typography>{comment}</Typography>
          </Card>
        ))}
      </div>
      <div>
        <TextField
          label="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddComment}>
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
