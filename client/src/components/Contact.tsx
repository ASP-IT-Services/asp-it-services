import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We'd love to hear from you. Send us a message!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <EmailIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  info@aspitservices.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  support@aspitservices.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <PhoneIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 765-4321
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LocationOnIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Tech Street
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Silicon Valley, CA 94025
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <img
                src="https://placehold.co/500x300/2196f3/white?text=Office+Location"
                alt="Office Location"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
