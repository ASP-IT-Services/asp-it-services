import { Box, Container, Typography, Button, Avatar, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import ankitKumarPhoto from '../assets/ankit-kumar-asp-it-services.jpg';

const aboutPoints = [
  'Over 5 years of industry experience',
  'Team of certified IT professionals',
  'Cutting-edge technology solutions',
  'Client-focused approach',
  'Proven track record of success',
  'Continued Post-Launch Support',
];

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started freelancing on Upwork during college days',
    icon: WorkIcon,
  },
  {
    year: '2020',
    title: 'Smart India Hackathon Winner',
    description: 'Led team to victory in SIH 2020 organized by MIC & AICTE',
    icon: EmojiEventsIcon,
  },
  {
    year: '2022',
    title: 'Academic Excellence',
    description: 'Graduated from SLIET Longowal with CSE degree',
    icon: SchoolIcon,
  },
  {
    year: '2022',
    title: 'Top Rated Plus on Upwork',
    description: 'Achieved highest freelancer status with Top Rated Plus badge',
    icon: StarIcon,
  },
  {
    year: 'Nov 2022',
    title: 'ASP IT Services Founded',
    description: 'Founded company to serve clients globally',
    icon: WorkIcon,
  },
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
        {/* Main About Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
            mb: 10,
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

        {/* Founder Story Section */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: 1.5,
                mb: 2,
                display: 'block',
              }}
            >
              FOUNDER STORY
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#1a202c',
                mb: 3,
              }}
            >
              Meet Ankit Kumar
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {/* Founder Image/Avatar */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(63, 81, 181, 0.3)',
                  border: '4px solid white',
                }}
              >
                <Box
                  component="img"
                  src={ankitKumarPhoto}
                  alt="Ankit Kumar - Founder & CEO of ASP IT Services"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%', // Adjust this value: 0% = top, 50% = center, 100% = bottom
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: '#1a202c' }}
              >
                Ankit Kumar
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 600 }}
              >
                Founder & CEO
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Chip
                  icon={<StarIcon />}
                  label="Top Rated Plus"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                />
                <Chip
                  icon={<EmojiEventsIcon />}
                  label="SIH Winner"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    color: '#f57c00',
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>

            {/* Founder Story Content */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Ankit Kumar's journey in technology began during his college days at{' '}
                <strong>SLIET Longowal</strong>, where he pursued Computer Science and Engineering. 
                In 2019, while still a student, he started freelancing on Upwork, quickly making a 
                name for himself in the competitive world of independent software development.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                His dedication and exceptional work quality earned him the prestigious{' '}
                <strong style={{ color: '#2196f3' }}>Top Rated</strong> and{' '}
                <strong style={{ color: '#2196f3' }}>Top Rated Plus</strong> badges on Upwork, 
                placing him among the top 3% of freelancers on the platform with the 2nd highest badge. 
                This achievement demonstrated his commitment to delivering excellence and building lasting client relationships.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                In 2020, Ankit led his team to victory at the{' '}
                <strong style={{ color: '#f57c00' }}>Smart India Hackathon 2020</strong>, 
                a prestigious national-level competition organized by the Ministry of Innovation 
                and AICTE. This win showcased his leadership abilities and innovative problem-solving skills.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4a5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                After graduating in 2022, Ankit founded <strong>ASP IT Services</strong> with a 
                vision to help businesses leverage technology for growth and innovation. Today, the 
                company serves clients globally, delivering enterprise-grade IT solutions backed by 
                years of hands-on experience and a proven track record of success.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Timeline Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: 1.5,
                mb: 2,
                display: 'block',
              }}
            >
              OUR JOURNEY
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#1a202c',
              }}
            >
              Milestones & Achievements
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                transform: { xs: 'none', md: 'translateX(-50%)' },
              },
            }}
          >
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    mb: 6,
                    display: 'grid',
                    gridTemplateColumns: { xs: '40px 1fr', md: isEven ? '1fr 40px 1fr' : '1fr 40px 1fr' },
                    gap: { xs: 2, md: 4 },
                    alignItems: 'center',
                  }}
                >
                  {/* Left Content (Desktop only) */}
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      textAlign: isEven ? 'right' : 'left',
                      order: isEven ? 1 : 3,
                    }}
                  >
                    {isEven && (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#1a202c',
                            mb: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4a5568',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </>
                    )}
                  </Box>

                  {/* Timeline Icon */}
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                      order: 2,
                      gridColumn: { xs: '1', md: 'auto' },
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 20 }} />
                  </Box>

                  {/* Right Content */}
                  <Box
                    sx={{
                      order: { xs: 2, md: isEven ? 3 : 1 },
                      textAlign: { xs: 'left', md: isEven ? 'left' : 'right' },
                      gridColumn: { xs: '2', md: 'auto' },
                    }}
                  >
                    <Chip
                      label={item.year}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a202c',
                        mb: 1,
                        display: { xs: 'block', md: isEven ? 'none' : 'block' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#4a5568',
                        lineHeight: 1.6,
                        display: { xs: 'block', md: isEven ? 'none' : 'block' },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
