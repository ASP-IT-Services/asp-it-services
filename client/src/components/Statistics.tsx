import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const useCountAnimation = ({ end, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, countRef };
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const StatCard = ({ icon, value, suffix = '', prefix = '', label }: StatCardProps) => {
  const { count, countRef } = useCountAnimation({ end: value, duration: 2000 });

  return (
    <Box
      ref={countRef}
      sx={{
        textAlign: 'center',
        p: 3,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          mb: 2,
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            transform: 'scale(1.1)',
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          mb: 1,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        {prefix}
        {count}
        {suffix}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#4A5568',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const Statistics = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'white',
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
            gap: { xs: 3, md: 4 },
          }}
        >
          <StatCard
            icon={<WorkIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
            value={500}
            suffix="+"
            label="Projects Completed"
          />
          <StatCard
            icon={<PeopleIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
            value={200}
            suffix="+"
            label="Happy Clients"
          />
          <StatCard
            icon={<TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
            value={10}
            suffix="+"
            label="Years of Excellence"
          />
          <StatCard
            icon={<StarIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
            value={98}
            suffix="%"
            label="Client Satisfaction"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics;
