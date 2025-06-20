import { Box, Typography, Button } from '@mui/material';
import empWorking from '../assets/emp-working.webp';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const AboutUs = () => {
  const stats = [
    { label: 'Projects', value: 27 },
    { label: 'Campaigns', value: 18 },
    { label: 'Events', value: 56 },
    { label: 'Excellency', value: 13 },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 3, md: 6 },
        py: 10,
        backgroundColor: '#fff',
      }}
    >
      {/* Left Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        style={{ flex: '1 1 500px', maxWidth: 600, marginBottom: '2rem' }}
      >
        <Typography variant="subtitle2" sx={{ color: 'gray', mb: 1 }}>
          ─ About Us
        </Typography>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Insights About Our Company
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon’s premier home builder. At Properties we take pride in building you everything you need to call The Meadows home.
        </Typography>
        <Button
          variant="text"
          sx={{
            color: '#e91e63',
            fontWeight: 600,
            pl: 0,
            '&:hover': {
              transform: 'translateX(4px)',
              textDecoration: 'underline',
            },
            transition: 'all 0.3s ease',
          }}
        >
          → Learn More
        </Button>

        {/* Stats */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4, gap: 4 }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box>
                <Typography variant="h5" sx={{ color: '#e91e63', fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{ flex: '1 1 400px', textAlign: 'center' }}
      >
        <img
          src={empWorking}
          alt="About Us"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default AboutUs;
