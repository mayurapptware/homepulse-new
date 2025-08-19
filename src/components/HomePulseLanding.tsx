import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MobileMenu from './MobileMenu';

// Styled components for custom styling
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(90deg, #4A90E2 0%, #F5A623 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(90deg, #357ABD 0%, #E0941A 100%)',
  },
}));

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #4A90E2 0%, #F5A623 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  background: '#1A1A1A',
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
      radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(245, 166, 35, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.05) 0%, transparent 70%)
    `,
    pointerEvents: 'none',
  },
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const LogoIcon = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: 8,
  background: 'linear-gradient(135deg, #F5A623 0%, #4A90E2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const FeatureDot = styled(Box)(({ color }: { color: string }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: 8,
}));

const HomePulseLanding: React.FC = () => {
  const handleSignUp = () => {
    console.log('Sign up clicked');
    // Add your sign up logic here
  };

  const handleLogIn = () => {
    console.log('Log in clicked');
    // Add your log in logic here
  };

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
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              HomePulse <span style={{ fontSize: '0.9em', opacity: 0.8 }}>AI</span>
            </Typography>
          </LogoContainer>

          {/* Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#4A90E2',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': { color: '#4A90E2' },
              }}
            >
              Features
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': { color: '#4A90E2' },
              }}
            >
              Pricing
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': { color: '#4A90E2' },
              }}
            >
              About
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={handleLogIn}
            >
              Log In
            </Button>
            <GradientButton onClick={handleSignUp}>Sign Up Free</GradientButton>
          </Box>

          {/* Mobile Menu */}
          <MobileMenu onSignUp={handleSignUp} onLogIn={handleLogIn} />
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            Your Home's Digital{' '}
            <GradientText
              component="span"
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
              fontSize: '1.2rem',
              lineHeight: 1.6,
              color: '#CCCCCC',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            HomePulse.ai helps your family stay organized by keeping all your home's important information in one place. Keep your family informed, save time, and enjoy more peace of mind.
          </Typography>

          {/* Call-to-Action Buttons */}
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 6 }}>
            <GradientButton
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                minWidth: 200,
              }}
              onClick={handleSignUp}
            >
              Sign Up For Free
            </GradientButton>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                minWidth: 200,
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={handleLogIn}
            >
              Log In
            </Button>
          </Box>

          {/* Feature Highlights */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FeatureDot color="#4A90E2" />
              <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                Secure & Private
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FeatureDot color="#F5A623" />
              <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                AI-Powered
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FeatureDot color="#4A90E2" />
              <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                Family-Friendly
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Background Graphics */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: 300,
          height: 300,
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* House outline */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '2px solid rgba(74, 144, 226, 0.3)',
            borderRadius: '20px 20px 0 0',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '30px solid transparent',
              borderRight: '30px solid transparent',
              borderBottom: '40px solid rgba(74, 144, 226, 0.3)',
            },
          }}
        />
      </Box>
    </BackgroundContainer>
  );
};

export default HomePulseLanding;