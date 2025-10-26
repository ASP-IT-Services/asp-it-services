import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
    content:
      'ASP IT Services transformed our infrastructure completely. Their expertise in cloud migration saved us time and money while improving performance.',
    rating: 5,
    avatar: 'https://placehold.co/100x100/2196f3/white?text=SJ',
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupHub',
    content:
      'Working with ASP IT Services was a game-changer. They delivered our mobile app ahead of schedule and exceeded all expectations.',
    rating: 5,
    avatar: 'https://placehold.co/100x100/1976d2/white?text=MC',
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateCo',
    content:
      'The team at ASP IT Services is incredibly professional and knowledgeable. Their custom solution perfectly addressed our unique business needs.',
    rating: 5,
    avatar: 'https://placehold.co/100x100/1565c0/white?text=ER',
  },
];

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            What Our Clients Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Don't just take our word for it
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: 'primary.main',
                    opacity: 0.3,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ mb: 3, fontSize: '1rem', lineHeight: 1.7 }}
                >
                  {testimonial.content}
                </Typography>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 3 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
