import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import BlogPageResults from '../components/blog/blog-page';
import SimpleCard from '../components/blog/add-posts';

import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <SimpleCard/>
        <BlogPageResults/>
    </Container>
    </>
  );
}
