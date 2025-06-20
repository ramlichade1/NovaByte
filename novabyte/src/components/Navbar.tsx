import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePagesMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#F8F9FA',
        py: 1,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#d81b60',
              fontFamily: 'sans-serif',
            }}
          >
            Nova Byte
          </Box>
        </NavLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontWeight: 500,
                  color: isActive ? '#d81b60' : '#212529',
                  position: 'relative',
                })}
              >
                <Box
                  sx={{
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -3,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#d81b60',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {label}
                </Box>
              </NavLink>
            ))}

            {/* Dropdown */}
            <Box
              onClick={handleOpenPagesMenu}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#212529',
                cursor: 'pointer',
                fontWeight: 500,
                '&:hover': { color: '#d81b60' },
              }}
            >
              Pages <ExpandMoreIcon fontSize="small" />
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClosePagesMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MenuItem onClick={handleClosePagesMenu}>Blog</MenuItem>
              <MenuItem onClick={handleClosePagesMenu}>Careers</MenuItem>
            </Menu>
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#212529' }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* CTA Button */}
        {!isMobile && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d81b60',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 2,
              '&:hover': { backgroundColor: '#c2185b' },
            }}
          >
            Get Started
          </Button>
        )}
      </Toolbar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            px: 2,
            py: 3,
            backgroundColor: '#f8f9fa',
          },
        }}
      >
        <Typography variant="h6" sx={{ color: '#d81b60', mb: 3, fontWeight: 'bold' }}>
          Nova Byte
        </Typography>

        <List>
          {navLinks.map(({ label, to }) => (
            <NavLink key={label} to={to} style={{ textDecoration: 'none' }}>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  color: '#212529',
                  mb: 1,
                  '&:hover': {
                    backgroundColor: '#f1f1f1',
                    color: '#d81b60',
                  },
                }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontWeight: 500, fontSize: 15 }}
                />
              </ListItemButton>
            </NavLink>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Button
          fullWidth
          variant="contained"
          onClick={() => setDrawerOpen(false)}
          sx={{
            backgroundColor: '#d81b60',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': { backgroundColor: '#c2185b' },
          }}
        >
          Get Started
        </Button>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
