import { Box, Container, Typography, Card, CardMedia, CardContent, Chip } from '@mui/material';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online marketplace with payment integration and inventory management.',
    image: 'https://placehold.co/600x400/667eea/white?text=E-Commerce',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Management System',
    description: 'Complete patient management solution with appointment scheduling and medical records.',
    image: 'https://placehold.co/600x400/764ba2/white?text=Healthcare',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
  },
  {
    id: 'fintech',
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking application with real-time transactions and analytics.',
    image: 'https://placehold.co/600x400/f093fb/white?text=FinTech',
    tags: ['React Native', 'Firebase', 'AWS'],
  },
  {
    id: 'logistics',
    title: 'Logistics Tracking System',
    description: 'Real-time fleet management and delivery tracking solution for logistics companies.',
    image: 'https://placehold.co/600x400/4facfe/white?text=Logistics',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    id: 'education',
    title: 'Learning Management Platform',
    description: 'Interactive online learning platform with video streaming and progress tracking.',
    image: 'https://placehold.co/600x400/00f2fe/white?text=Education',
    tags: ['Next.js', 'GraphQL', 'Redis'],
  },
  {
    id: 'retail',
    title: 'Retail POS System',
    description: 'Cloud-based point-of-sale system with inventory and customer management.',
    image: 'https://placehold.co/600x400/43e97b/white?text=Retail',
    tags: ['React', 'Express', 'Azure'],
  },
];

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
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
            Our Portfolio
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Showcasing our successful projects and implementations
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
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
              <CardMedia
                component="img"
                height="240"
                image={project.image}
                alt={project.title}
                sx={{ borderRadius: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
