import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
  Chip,
  Portal,
  Slide,
  SlideProps
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ScrollScatter } from '../ui/ScrollScatter';

// Interface for the form's state
interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const headerAnimation = useScrollAnimation(0.14);
  const contentAnimation = useScrollAnimation(0.14);
  const contactInfoAnimation = useScrollAnimation(0.14);

  const getContactAnimationClass = (index: number) => {
    const mod = index % 3;
    if (mod === 0) return 'scroll-animate-cert-left';
    if (mod === 1) return 'scroll-animate-cert-up';
    return 'scroll-animate-cert-right';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '550b5502-1b5f-4fb7-a344-cd848a78ef11',
          from_name: 'My Portfolio',
          subject: `New Portfolio Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          "User Subject": formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setAlertSeverity('success');
        setAlertMessage('Thank you! Your message has been sent successfully.');
        setShowAlert(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setAlertSeverity('error');
        setAlertMessage(result.message || 'Failed to send your message. Please try again.');
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertSeverity('error');
      setAlertMessage('Something went wrong. Please try again later.');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30, color: '#ff9f1a' }} />,
      title: 'Email',
      value: 'sunkavalli.veerendra1973@gmail.com',
      link: 'mailto:sunkavalli.veerendra1973@gmail.com'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30, color: '#ff9f1a' }} />,
      title: 'Phone',
      value: '+91 7995762616',
      link: 'tel:+917995762616'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 30, color: '#ff9f1a' }} />,
      title: 'Location',
      value: 'Rajahmundry, Andhra Pradesh, India',
      link: 'https://maps.google.com/?q=Rajahmundry,+Andhra+Pradesh,+India'
    }
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/veerendra-chowdary-sunkavalli-513b58309/', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: 'https://github.com/veeru2005', label: 'GitHub' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 5, md: 6 }, pb: { xs: 9, md: 10 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(8,10,15,1) 0%, rgba(5,7,12,1) 100%)'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box>
          <ScrollScatter direction="up" distance={100}>
            <Box>
              <Typography
                sx={{
                  color: '#ff9f1a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.11em',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 1
                }}
              >
                Contact
              </Typography>

              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 1.5,
                  color: '#f5f7ff'
                }}
              >
                Get In Touch
              </Typography>
              
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: '#aeb8ce',
                  mb: 5,
                  fontSize: '1rem',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Tell me about your idea, role, or collaboration goal and I will get back to you quickly.
              </Typography>
            </Box>
          </ScrollScatter>
        </Box>

        <Box 
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.92fr 1.08fr' }, gap: 2.4 }}
        >
          <ScrollScatter direction="left" distance={250}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid #ff9f1a',
                }}
              >
                <CardContent sx={{ p: { xs: 2.7, md: 3.2 } }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 750, mb: 2.2, color: '#f1f5ff' }}
                  >
                    Contact Information
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2.5 }}>
                    <Chip label="Open to freelance" sx={{ bgcolor: 'rgba(255,159,26,0.14)', color: '#ff9f1a' }} />
                    <Chip label="Open to full-time role" sx={{ bgcolor: 'rgba(255,159,26,0.14)', color: '#ff9f1a' }} />
                  </Box>
                  
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5,
                        p: 1.6,
                        borderRadius: '16px',
                        border: '1px solid rgba(255,159,26,0.35)',
                        bgcolor: 'rgba(255,159,26,0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,159,26,0.15)',
                          borderColor: 'rgba(255,159,26,0.6)'
                        }
                      }}
                    >
                    <Box sx={{ mr: 2.2 }}>{info.icon}</Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#eef2ff' }}>
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#aeb8ce',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          if (info.link.startsWith('http')) {
                            window.open(info.link, '_blank');
                            return;
                          }
                          window.location.href = info.link;
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.2, color: '#f1f5ff' }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.05)',
                          color: '#dce4f5',
                          border: '1px solid rgba(255,255,255,0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(255,159,26,0.12)',
                            borderColor: 'rgba(255,159,26,0.4)',
                            color: '#ff9f1a',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    p: 2.3,
                    background: 'linear-gradient(125deg, rgba(255,159,26,0.17), rgba(255,159,26,0.1))',
                    border: '1px solid #ff9f1a',
                    borderRadius: '16px',
                    textAlign: 'left'
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#f3f7ff', mb: 0.6 }}>
                    Let's Build Something Great!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#d4ddf2', lineHeight: 1.7 }}>
                    Send your details with project scope and timeline. I usually respond within 24 hours.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            </Box>
          </ScrollScatter>

          <ScrollScatter direction="right" distance={250}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid #ff9f1a',
                }}
              >
                <CardContent sx={{ p: { xs: 2.7, md: 3.2 } }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 750, mb: 0.9, color: '#f1f5ff' }}
                  >
                  Send Message
                </Typography>

                <Typography sx={{ color: '#9faac4', mb: 3.2, lineHeight: 1.7 }}>
                  Share your requirement and I will contact you directly by email.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={12}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{ mb: 3 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={<SendIcon />}
                    sx={{
                      px: 4,
                      py: 1.35,
                      minWidth: '190px',
                      bgcolor: '#ff9f1a',
                      color: '#1a1205',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: '#ffab33',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
            </Box>
          </ScrollScatter>
        </Box>

        <Portal>
          <Snackbar
            open={showAlert}
            autoHideDuration={2250}
            onClose={() => setShowAlert(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            TransitionComponent={SlideTransition}
            sx={{ zIndex: 999999, top: { xs: 24, md: 32 } }}
          >
            <Alert 
              severity={alertSeverity} 
              onClose={() => setShowAlert(false)} 
              sx={{ 
                width: '100%', 
                fontSize: '1.05rem', 
                alignItems: 'center',
                color: '#ffffff',
                '& .MuiAlert-icon': { color: '#ffffff' },
                '& .MuiIconButton-root, & .MuiSvgIcon-root': { color: '#ffffff' }
              }}
              variant="filled"
            >
              {alertMessage}
            </Alert>
          </Snackbar>
        </Portal>
      </Container>
    </Box>
  );
};

export default Contact;
