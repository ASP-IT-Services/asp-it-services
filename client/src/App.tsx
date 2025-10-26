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
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
