import { Box, Container, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const aboutPoints = [
  'Over 10 years of industry experience',
  'Team of certified IT professionals',
  'Cutting-edge technology solutions',
  'Client-focused approach',
  'Proven track record of success',
  '24/7 customer support',
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          <Box>
            <Box
              component="img"
              src="https://placehold.co/600x500/1976d2/white?text=About+Us"
              alt="About ASP IT Services"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 700, mb: 3 }}
            >
              About ASP IT Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              We are a leading IT services provider dedicated to helping
              businesses transform digitally. Our expert team combines technical
              expertise with business acumen to deliver solutions that drive
              real results.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              From startups to enterprises, we've helped hundreds of clients
              achieve their technology goals. Our commitment to excellence and
              innovation sets us apart in the industry.
            </Typography>

            <Box sx={{ mb: 4 }}>
              {aboutPoints.map((point, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: 'primary.main', mr: 2, fontSize: 28 }}
                  />
                  <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
