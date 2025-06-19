import { Box, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Facebook, LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', px: 6, py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
          mb: 4,
        }}
      >
        {/* Left Column */}
        <Box sx={{ minWidth: '200px' }}>
          <Typography variant="h6" sx={{ color: '#e91e63', fontWeight: 700, mb: 1 }}>
            Nova Byte
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Creative Design & Development Agency in India.
          </Typography>
          <Box>
            <IconButton sx={{ color: '#fff' }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <Facebook />
            </IconButton>
          </Box>
        </Box>

        {/* Support */}
        <Box sx={{ minWidth: '160px' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Support
          </Typography>
          {['About', 'UX/UI Design', 'Graphic Design', 'Business Strategy', 'App Development'].map(
            (text, i) => (
              <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
                <Link href="#" underline="none" sx={{ color: '#ccc' }}>
                  {text}
                </Link>
              </Typography>
            )
          )}
        </Box>

        {/* Services */}
        <Box sx={{ minWidth: '160px' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Services
          </Typography>
          {['Blog', 'Service', 'Portfolio', 'Pricing Plan', 'Contact Us'].map((text, i) => (
            <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
              <Link href="#" underline="none" sx={{ color: '#ccc' }}>
                {text}
              </Link>
            </Typography>
          ))}
        </Box>

        {/* Contact */}
        <Box sx={{ minWidth: '200px' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn fontSize="small" sx={{ mr: 1 }} />
             Nagpur
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Phone fontSize="small" sx={{ mr: 1 }} />
             +91 9307059956
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
            <Email fontSize="small" sx={{ mr: 1 }} />
             novabytetechnology.info@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Bottom Copyright */}
      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', color: '#aaa' }}>
        Copyright 2025, All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
