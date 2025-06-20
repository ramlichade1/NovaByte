import { Box, Typography, Link, IconButton } from '@mui/material';
import {
  LinkedIn,
  Instagram,
  Facebook,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', px: { xs: 3, md: 6 }, py: 8 }}>
      {/* Main Footer */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 6,
          mb: 4,
        }}
      >
        {/* Branding */}
        <Box sx={{ flex: '1 1 200px' }}>
          <Typography variant="h6" sx={{ color: '#e91e63', fontWeight: 700, mb: 1 }}>
            Nova Byte
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
            Creative Design & Development Agency in India.
          </Typography>
          <Box>
            {[<LinkedIn />, <Instagram />, <Facebook />].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: '#ccc',
                  transition: 'color 0.3s',
                  '&:hover': { color: '#e91e63' },
                }}
              >
                {Icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Services Links */}
        <Box sx={{ flex: '1 1 150px' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Services
          </Typography>
          {[
            'Software Projects',
            'Hardware Projects',
            'Portfolio',
            'App Development',
            'Web Development',
          ].map((text, i) => (
            <Link
              key={i}
              href="#"
              underline="none"
              sx={{
                display: 'block',
                color: '#ccc',
                mb: 0.5,
                fontSize: 14,
                '&:hover': { color: '#e91e63' },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        {/* Contact Info */}
        <Box sx={{ flex: '1 1 220px' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Contact
          </Typography>
          {[
            { icon: <LocationOn fontSize="small" />, text: 'Nagpur' },
            { icon: <Phone fontSize="small" />, text: '+91 9307059956' },
            { icon: <Email fontSize="small" />, text: 'novabytetechnology.info@gmail.com' },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#ccc',
                mb: i !== 2 ? 1 : 0,
              }}
            >
              <Box sx={{ mr: 1 }}>{item.icon}</Box>
              <Typography variant="body2">{item.text}</Typography>
            </Box>
          ))}

        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          textAlign: 'center',
          display: 'block',
          color: '#aaa',
          pt: 2,
          borderTop: '1px solid #333',
        }}
      >
        © 2025 Nova Byte. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
