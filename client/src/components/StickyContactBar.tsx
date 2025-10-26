import { Box, Container, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { useState, useEffect } from 'react';

const StickyContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'primary.main',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
            gap: 2,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Left Side - Message */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flex: { xs: '1 1 100%', md: '1' },
            }}
          >
            <ChatIcon sx={{ color: 'white', fontSize: 32 }} />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.2,
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                }}
              >
                Get a free consultation today
              </Typography>
            </Box>
          </Box>

          {/* Right Side - Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-end' },
              flex: { xs: '1 1 100%', md: 'auto' },
            }}
          >
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              onClick={handleGetInTouch}
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                fontWeight: 700,
                px: 3,
                py: 1.2,
                fontSize: { xs: '0.9rem', md: '1rem' },
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
                },
                transition: 'all 0.3s',
              }}
            >
              Get in Touch
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<PhoneIcon />}
              component="a"
              href="tel:+1234567890"
              sx={{
                borderColor: 'white',
                borderWidth: 2,
                color: 'white',
                fontWeight: 700,
                px: 3,
                py: 1.2,
                fontSize: { xs: '0.9rem', md: '1rem' },
                '&:hover': {
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              Call Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StickyContactBar;
