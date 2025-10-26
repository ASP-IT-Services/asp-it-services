import { Box, Container, Typography } from '@mui/material';

const clients = [
  {
    name: 'TechCorp',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=TechCorp',
  },
  {
    name: 'InnovateCo',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=InnovateCo',
  },
  {
    name: 'DataSystems',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=DataSystems',
  },
  {
    name: 'CloudNet',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=CloudNet',
  },
  {
    name: 'StartupHub',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=StartupHub',
  },
  {
    name: 'Digital Solutions',
    logo: 'https://placehold.co/180x60/e0e0e0/666666?text=DigitalSolutions',
  },
];

const ClientLogos = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#718096',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Trusted By Industry Leaders
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#2D3748',
              mt: 1,
            }}
          >
            Companies That Trust Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(6, 1fr)',
            },
            gap: 4,
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={client.name}
              sx={{
                opacity: 0.7,
                transition: 'all 0.3s',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  '100%': {
                    opacity: 0.7,
                    transform: 'translateY(0)',
                  },
                },
                '&:hover': {
                  opacity: 1,
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                src={client.logo}
                alt={`${client.name} logo`}
                sx={{
                  width: '100%',
                  maxWidth: 140,
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogos;
