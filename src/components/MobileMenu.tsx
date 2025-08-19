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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const GradientButton = styled(Button)({
  background: 'linear-gradient(90deg, #4A90E2 0%, #F5A623 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(90deg, #357ABD 0%, #E0941A 100%)',
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
        sx={{ color: 'white' }}
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: '#1A1A1A',
            width: 280,
            pt: 2,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              sx={{
                py: 2,
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
                      color: item.active ? '#4A90E2' : 'white',
                      fontWeight: item.active ? 600 : 400,
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ p: 2, mt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
            onClick={onLogIn}
          >
            Log In
          </Button>
          <GradientButton fullWidth onClick={onSignUp}>
            Sign Up Free
          </GradientButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;