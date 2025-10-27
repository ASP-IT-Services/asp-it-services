import { Box } from "@mui/material";
import darkLogo from '../assets/logos/asp-it-services-dark.png';
import lightLogo from '../assets/logos/asp-it-services-light.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  onClick?: () => void;
  height?: number;
}

const Logo = ({ 
  onClick, 
  variant = 'light',
  height = 90
}: LogoProps) => {
  // Use light logo for light variant, dark logo for dark variant
  const logoSrc = variant === 'light' ? lightLogo : darkLogo;
  
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-block',
        transition: 'opacity 0.2s ease',
        '&:hover': onClick ? {
          opacity: 0.8
        } : {}
      }}
    >
      <img 
        src={logoSrc} 
        alt="ASP IT Services Logo" 
        style={{
          width: 'auto',
          height: `${height}px`,
          display: 'block'
        }}
      />
    </Box>
  );
};

export default Logo;
