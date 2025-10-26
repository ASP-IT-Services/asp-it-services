import { Box, Typography } from '@mui/material';
import { COMPANY_NAME } from '../constants/navigation';

interface LogoProps {
  variant?: 'header' | 'footer';
  onClick?: () => void;
}

const Logo = ({ variant = 'header', onClick }: LogoProps) => {
  const isHeader = variant === 'header';
  
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'opacity 0.3s',
        '&:hover': onClick ? {
          opacity: 0.8,
        } : {},
      }}
    >
      <Box
        component="img"
        src="https://placehold.co/40x40/2196f3/white?text=ASP"
        alt={`${COMPANY_NAME} Logo`}
        sx={{
          width: isHeader ? 40 : 32,
          height: isHeader ? 40 : 32,
          borderRadius: 1,
          objectFit: 'cover',
        }}
      />
      <Typography
        variant={isHeader ? 'h6' : 'body1'}
        component="div"
        sx={{
          fontWeight: 700,
          color: isHeader ? 'primary.main' : 'white',
          display: { xs: isHeader ? 'none' : 'block', sm: 'block' },
        }}
      >
        {COMPANY_NAME}
      </Typography>
    </Box>
  );
};

export default Logo;
