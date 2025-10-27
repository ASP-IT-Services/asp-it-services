import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NAVIGATION_ITEMS, COMPANY_NAME } from '../constants/navigation';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: { xs: 6, md: 8 },
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Logo variant="dark" />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 2 }}>
              Transforming businesses through innovative IT solutions and
              exceptional service delivery.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAVIGATION_ITEMS.map((item) => (
                <Typography
                  key={item.id}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Web Development', 'Cloud Solutions', 'Mobile Development', 'Cybersecurity'].map(
                (service) => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {service}
                  </Typography>
                )
              )}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
