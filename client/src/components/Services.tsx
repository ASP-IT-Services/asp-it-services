import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Build responsive, scalable web applications using the latest technologies and frameworks.',
    icon: <CodeIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/2196f3/white?text=Web+Dev',
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description:
      'Migrate and manage your infrastructure on leading cloud platforms like AWS, Azure, and GCP.',
    icon: <CloudIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/1976d2/white?text=Cloud',
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description:
      'Create stunning native and cross-platform mobile applications for iOS and Android.',
    icon: <PhoneAndroidIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/1565c0/white?text=Mobile',
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description:
      'Protect your business with comprehensive security solutions and vulnerability assessments.',
    icon: <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/0d47a1/white?text=Security',
  },
  {
    id: 'database',
    title: 'Database Management',
    description:
      'Design, implement, and optimize database solutions for maximum performance and reliability.',
    icon: <StorageIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/42a5f5/white?text=Database',
  },
  {
    id: 'support',
    title: 'IT Support',
    description:
      '24/7 technical support and maintenance to keep your systems running smoothly.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    image: 'https://placehold.co/400x300/64b5f6/white?text=Support',
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Our Services
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Comprehensive IT solutions tailored to your business needs
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.id}
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
