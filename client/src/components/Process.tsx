import { Box, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const processSteps = [
  {
    number: '01',
    icon: SearchIcon,
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, challenges, and requirements through detailed consultation.',
    timeline: '1-2 weeks',
  },
  {
    number: '02',
    icon: DesignServicesIcon,
    title: 'Strategy & Planning',
    description: 'Our team creates a comprehensive roadmap with clear milestones, timelines, and deliverables.',
    timeline: '1-2 weeks',
  },
  {
    number: '03',
    icon: CodeIcon,
    title: 'Development',
    description: 'Expert developers bring your vision to life using cutting-edge technologies and best practices.',
    timeline: '4-12 weeks',
  },
  {
    number: '04',
    icon: BugReportIcon,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your solution is bug-free, secure, and performs flawlessly.',
    timeline: '1-2 weeks',
  },
  {
    number: '05',
    icon: RocketLaunchIcon,
    title: 'Launch & Deployment',
    description: 'We handle the entire deployment process ensuring a smooth transition to production.',
    timeline: '3-5 days',
  },
  {
    number: '06',
    icon: SupportAgentIcon,
    title: 'Support & Optimization',
    description: 'Ongoing maintenance, updates, and optimization to keep your solution running at peak performance.',
    timeline: 'Ongoing',
  },
];

const Process = () => {
  return (
    <Box
      id="process"
      sx={{
        py: 10,
        backgroundColor: 'rgba(249, 250, 251, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
            OUR PROCESS
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: '#1a202c',
              mb: 2,
            }}
          >
            How We Work
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4a5568',
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Our proven 6-step methodology ensures successful project delivery every time
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Box
                key={step.number}
                sx={{
                  position: 'relative',
                  p: 4,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  '@keyframes fadeInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(33, 150, 243, 0.15)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #2196f3 0%, #64b5f6 100%)',
                    borderRadius: '3px 3px 0 0',
                  },
                }}
              >
                {/* Step Number */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(33, 150, 243, 0.08)',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </Typography>

                {/* Icon */}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <IconComponent sx={{ fontSize: 32, color: 'primary.main' }} />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#1a202c',
                    mb: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#4a5568',
                    lineHeight: 1.7,
                    mb: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </Typography>

                {/* Timeline */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.5,
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderRadius: 2,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                    }}
                  >
                    {step.timeline}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            textAlign: 'center',
            border: '2px solid rgba(33, 150, 243, 0.1)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1a202c',
              mb: 2,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4a5568',
              mb: 3,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Let's discuss your project and create a customized solution that drives your business forward
          </Typography>
          <Box
            component="button"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              backgroundColor: 'primary.main',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(33, 150, 243, 0.5)',
              },
            }}
          >
            Start Your Project
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Process;
