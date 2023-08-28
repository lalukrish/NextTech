import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Grid, Modal } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import myPostsSservice from './my-posts-service';
import MyPostCardMoal from './my-post-modalView';

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

const MyPostResults = () => {
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

  useEffect(() => {
    handleAllPosts();
  }, []);

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MyPostCardMoal open={open} handleModalClose={handleModalClose} />
      <Grid container spacing={2}>
        {' '}
        {/* Use a Grid container */}
        {myPosts?.map((posts) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={posts._id}>
            {' '}
            {/* Specify grid size for each card */}
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
              />{' '}
              <CardMedia
                component="img"
                height="194"
                image={posts.image_url}
                alt="Paella dish"
                onClick={handleModalOpen}
              />
              <CardContent>
                {/* <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                  cup of frozen peas along with the mussels, if you like.
                </Typography> */}
              </CardContent>
              <Typography paragraph>{posts.post_title}</Typography>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
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
                    reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until
                    mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
                    don&apos;t open.)
                  </Typography>
                  <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default MyPostResults;
