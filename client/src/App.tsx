import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyContactBar from './components/StickyContactBar';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',      // Deep navy blue - trust & authority
      light: '#7986cb',     // Light navy
      dark: '#303f9f',      // Darker navy
    },
    secondary: {
      main: '#00897b',      // Professional teal - innovation & growth
      light: '#4db6ac',
      dark: '#00695c',
    },
    success: {
      main: '#388e3c',      // Professional green
    },
    warning: {
      main: '#f57c00',      // Amber
    },
    error: {
      main: '#d32f2f',      // Professional red
    },
    text: {
      primary: '#424242',   // Dark gray for headings
      secondary: '#616161', // Medium gray for body text
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',     // Very subtle gray for alternating sections
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    fontSize: 16,
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem', // 18px - improved readability
      lineHeight: 1.7,
      color: '#616161',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#757575',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none', // More professional than all-caps
    },
  },
  shape: {
    borderRadius: 12, // Professional, moderate rounding
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.08)',
    '0 2px 4px rgba(0,0,0,0.08)',
    '0 2px 8px rgba(0,0,0,0.10)',
    '0 4px 12px rgba(0,0,0,0.12)',
    '0 6px 16px rgba(0,0,0,0.12)',
    '0 8px 20px rgba(0,0,0,0.12)',
    '0 12px 24px rgba(0,0,0,0.12)',
    '0 16px 32px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
    '0 20px 40px rgba(0,0,0,0.12)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '12px 36px',
          fontSize: '1rem',
          transition: 'all 0.2s ease',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(63, 81, 181, 0.3)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(63, 81, 181, 0.4)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid #EEEEEE',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            borderColor: '#E0E0E0',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <Hero />
        <ClientLogos />
        <Services />
        <Process />
        <About />
        <Statistics />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <StickyContactBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
