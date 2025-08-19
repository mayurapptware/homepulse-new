import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Home as HomeIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Group as GroupIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import MobileMenu from './MobileMenu';

// Styled components for modern design
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  border: '2px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 70%)
    `,
    pointerEvents: 'none',
  },
});

const FloatingCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
}));

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const LogoIcon = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
});

const HomePulseLanding: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  const handleLogIn = () => {
    console.log('Log in clicked');
  };

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 32, color: 'white' }} />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected with enterprise-grade security.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 32, color: 'white' }} />,
      title: 'Lightning Fast',
      description: 'AI-powered responses in milliseconds for seamless family communication.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 32, color: 'white' }} />,
      title: 'Family-Friendly',
      description: 'Designed specifically for families to stay connected and organized.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Family Manager',
      content: 'HomePulse has transformed how our family stays organized. Everything is in one place!',
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Parent',
      content: 'The AI features are incredible. It remembers everything we need to know about our home.',
      avatar: 'MC',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      content: 'Finally, a solution that actually works for busy families. Highly recommend!',
      avatar: 'ER',
      rating: 5,
    },
  ];

  return (
    <BackgroundContainer>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          {/* Logo */}
          <LogoContainer>
            <LogoIcon>
              <HomeIcon />
            </LogoIcon>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
              Pulse<span style={{ color: '#667eea' }}>Zenith</span>
            </Typography>
          </LogoContainer>

          {/* Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {['Home', 'Features', 'Pricing', 'About'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  color: item === 'Home' ? '#667eea' : 'white',
                  fontWeight: item === 'Home' ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#667eea' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <SecondaryButton onClick={handleLogIn}>
              Log In
            </SecondaryButton>
            <GradientButton onClick={handleSignUp}>
              Get Started Free
            </GradientButton>
          </Box>

          {/* Mobile Menu */}
          <MobileMenu onSignUp={handleSignUp} onLogIn={handleLogIn} />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 6, md: 12 } }}>
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 900,
              mx: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Badge */}
            <Chip
              icon={<StarIcon />}
              label="Trusted by 10,000+ families"
              sx={{
                mb: 4,
                background: 'rgba(102, 126, 234, 0.1)',
                color: '#667eea',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                fontWeight: 600,
              }}
            />

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Your Home's Digital{' '}
              <GradientText
                component="span"
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Command Center
              </GradientText>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: '1.25rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Transform your home into a smart, connected ecosystem. PulseZenith helps your family stay organized, 
              informed, and in control with AI-powered insights and seamless automation.
            </Typography>

            {/* Call-to-Action Buttons */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 8, flexWrap: 'wrap' }}>
              <GradientButton
                size="large"
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.1rem',
                  minWidth: 220,
                }}
                onClick={handleSignUp}
                endIcon={<ArrowForwardIcon />}
              >
                Start Free Trial
              </GradientButton>
              <SecondaryButton
                size="large"
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.1rem',
                  minWidth: 220,
                }}
                onClick={handleLogIn}
              >
                Watch Demo
              </SecondaryButton>
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 6,
                flexWrap: 'wrap',
                mb: 8,
              }}
            >
              {[
                { number: '10K+', label: 'Happy Families' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
              ].map((stat) => (
                <Box key={stat.label} sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#667eea',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Fade>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 8, md: 12 } }}>
        <Slide direction="up" in={isVisible} timeout={1200}>
          <Box>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                }}
              >
                Why Choose{' '}
                <GradientText
                  component="span"
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  PulseZenith
                </GradientText>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Experience the future of home management with cutting-edge AI technology
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FloatingCard>
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </FloatingCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Slide>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 8, md: 12 } }}>
        <Slide direction="up" in={isVisible} timeout={1400}>
          <Box>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                }}
              >
                Loved by Families{' '}
                <GradientText
                  component="span"
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Worldwide
                </GradientText>
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FloatingCard>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          mr: 2,
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: '#667eea', fontSize: 20 }}
                        />
                      ))}
                    </Box>
                  </FloatingCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Slide>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ mb: { xs: 8, md: 12 } }}>
        <Slide direction="up" in={isVisible} timeout={1600}>
          <FloatingCard>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                }}
              >
                Ready to Transform Your{' '}
                <GradientText
                  component="span"
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Home?
                </GradientText>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Join thousands of families who have already discovered the power of PulseZenith
              </Typography>
              <GradientButton
                size="large"
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.2rem',
                  minWidth: 250,
                }}
                onClick={handleSignUp}
                endIcon={<ArrowForwardIcon />}
              >
                Start Your Free Trial
              </GradientButton>
            </Box>
          </FloatingCard>
        </Slide>
      </Container>

      {/* Background Graphics */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 400,
          height: 400,
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            border: '2px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '50%',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '60%',
              border: '2px solid rgba(118, 75, 162, 0.3)',
              borderRadius: '50%',
            },
          }}
        />
      </Box>
    </BackgroundContainer>
  );
};

export default HomePulseLanding;