import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Grid } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import {
  // ... other imports ...
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  Favorite as FavoriteIcon, // Import FavoriteIcon
  // ... other imports ...
} from '@mui/icons-material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import myPostsSservice from './my-posts-service';
import MyPostCardModal from './my-post-modalView';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyPostCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [myPosts, setMyPosts] = React.useState();

  const handleAllPosts = () => {
    myPostsSservice().then((res) => {
      const data = res.data.posts;
      setMyPosts(data);
      console.log('data->>>>', data);
    });
  };

  const [postLikes, setPostLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePost = () => {
    if (isLiked) {
      setPostLikes(postLikes - 1);
      setIsLiked(false);
    } else {
      setPostLikes(postLikes + 1);
      setIsLiked(true);
    }
  };

  useEffect(() => {
    handleAllPosts();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [postId, setPostId] = useState();

  const handleImageClick = (postId) => {
    setPostId(postId);
  };

  console.log('postId--->', postId);

  return (
    <>
      <MyPostCardModal modalOpen={modalOpen} handleModalClose={handleModalClose} postId={postId} />
      <div>
        <Grid container spacing={2}>
          {myPosts?.map((posts) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={posts._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  // avatar={
                  //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  //     R
                  //   </Avatar>
                  // }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={posts.image_url}
                  alt="Paella dish"
                  onClick={() => {
                    handleImageClick(posts._id); // Call the handleImageClick function
                    handleModalOpen(); // Call the handleModalOpen function to open the modal
                  }}
                />

                <CardActions disableSpacing>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      handleLikePost({ id: posts._id });
                      setIsLiked(!isLiked);
                    }}
                  >
                    {isLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon />}
                  </IconButton>
                  <Typography>{postLikes} Likes</Typography>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>{posts.description}</Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without
                      stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                      reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring,
                      until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default MyPostCard;
