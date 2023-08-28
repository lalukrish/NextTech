import { Label } from '@mui/icons-material';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
export default function MyPosts() {
  return (
    <Card style={{ position: 'relative', width: 500, padding: 2, boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.16)' }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <Label
          variant="filled"
          //   color={(status === 'sale' && 'error') || 'info'}
          sx={{
            zIndex: 9,
            top: 16,
            right: 16,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          hi
        </Label>

        <StyledProductImg
          alt="no jiamge"
          src="https://imgs.search.brave.com/-ubwA6j-IXAw-aPpigoKMBVNG6StM-XE5LyzFFhXVHE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw"
        />

        <StyledProductImg
          alt="no jiamge"
          src="https://imgs.search.brave.com/-ubwA6j-IXAw-aPpigoKMBVNG6StM-XE5LyzFFhXVHE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw"
        />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            hi
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors="" /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {/* {priceSale && fCurrency(priceSale)} */}
            </Typography>
            {/* &nbsp;
            {fCurrency(price)} */}
            52
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
