import { Box, Container, Typography, Button } from '@mui/material';
import { COMPANY_NAME, COMPANY_TAGLINE } from '../constants/navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Curvy Gradient Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '120%',
            height: '120%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            borderRadius: '0 0 50% 50% / 0 0 20% 20%',
            transform: 'rotate(-5deg)',
            animation: 'waveAnimation 8s ease-in-out infinite',
            '@keyframes waveAnimation': {
              '0%, 100%': {
                transform: 'rotate(-5deg) translateY(0)',
              },
              '50%': {
                transform: 'rotate(-5deg) translateY(-20px)',
              },
            },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            right: '-10%',
            width: '80%',
            height: '100%',
            background: 'linear-gradient(225deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
            borderRadius: '50% 50% 0 0 / 20% 20% 0 0',
            transform: 'rotate(5deg)',
            animation: 'waveAnimation2 10s ease-in-out infinite',
            '@keyframes waveAnimation2': {
              '0%, 100%': {
                transform: 'rotate(5deg) translateY(0)',
              },
              '50%': {
                transform: 'rotate(5deg) translateY(20px)',
              },
            },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              animation: 'fadeInLeft 1s ease-out',
              '@keyframes fadeInLeft': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(-50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                color: '#F7FAFC',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '2px 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              Welcome to {COMPANY_NAME}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#EDF2F7',
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 500,
                textShadow: '1px 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              {COMPANY_TAGLINE}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E2E8F0',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              We deliver cutting-edge IT solutions that drive business growth and
              innovation. From web development to cloud services, we're your
              trusted technology partner.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleGetStarted}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(33, 150, 243, 0.5)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const element = document.querySelector('#services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  borderColor: 'primary.main',
                  borderWidth: 2,
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    borderWidth: 2,
                    backgroundColor: 'rgba(33, 150, 243, 0.08)',
                    color: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              animation: 'fadeInRight 1s ease-out',
              '@keyframes fadeInRight': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(50px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            <Box
              component="img"
              src="https://placehold.co/600x500/667eea/white?text=IT+Solutions"
              alt="Hero"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
