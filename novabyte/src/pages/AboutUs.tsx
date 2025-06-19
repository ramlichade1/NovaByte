import { Box, Typography, Button } from '@mui/material';
import empWorking from '../assets/emp-working.webp'; // replace with your image path

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 6,
        py: 8,
        backgroundColor: '#fff',
      }}
    >
      {/* Left Side Text Content */}
      <Box sx={{ flex: '1 1 500px', maxWidth: '600px', mb: { xs: 4, md: 0 } }}>
        <Typography variant="subtitle2" sx={{ color: 'gray', mb: 1 }}>
          ─ About Us
        </Typography>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Insights About Our Company
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon’s premier home builder. At Properties we take pride in building you everything you need to call The Meadows home.
        </Typography>
        <Button variant="text" sx={{ color: '#e91e63', fontWeight: 600, pl: 0 }}>
          → Learn More
        </Button>

        {/* Stats */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4, gap: 4 }}>
          {[
            { label: 'Projects', value: 27 },
            { label: 'Campaigns', value: 18 },
            { label: 'Events', value: 56 },
            { label: 'Excellency', value: 13 },
          ].map((stat, index) => (
            <Box key={index}>
              <Typography variant="h5" sx={{ color: '#e91e63', fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2">{stat.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right Side Image */}
      <Box sx={{ flex: '1 1 400px', textAlign: 'center' }}>
        <img
          src={empWorking}
          alt="About Us"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '12px' }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
