import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

        {/* Nav Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                style={({ isActive }) => ({
                  position: 'relative',
                  textDecoration: 'none',
                  fontWeight: 500,
                  color: isActive ? '#d81b60' : '#212529',
                })}
              >
                <Box
                  sx={{
                    position: 'relative',
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

        {/* CTA Button */}
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
