import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const GradientButton = styled(Button)({
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
});

const SecondaryButton = styled(Button)({
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
});

interface MobileMenuProps {
  onSignUp: () => void;
  onLogIn: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onSignUp, onLogIn }) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: 'Home', active: true },
    { text: 'Features', active: false },
    { text: 'Pricing', active: false },
    { text: 'About', active: false },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ 
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            width: 320,
            pt: 2,
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
              }}
            >
              PZ
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
              Pulse<span style={{ color: '#667eea' }}>Zenith</span>
            </Typography>
          </Box>
        </Box>

        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              sx={{
                py: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      color: item.active ? '#667eea' : 'white',
                      fontWeight: item.active ? 600 : 500,
                      fontSize: '1.1rem',
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ p: 3, mt: 'auto' }}>
          <SecondaryButton
            fullWidth
            sx={{
              mb: 2,
              py: 1.5,
            }}
            onClick={onLogIn}
          >
            Log In
          </SecondaryButton>
          <GradientButton 
            fullWidth 
            onClick={onSignUp}
            sx={{
              py: 1.5,
            }}
          >
            Get Started Free
          </GradientButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;