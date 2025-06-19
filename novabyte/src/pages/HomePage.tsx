import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.avif';
import type { Variants } from 'framer-motion';


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeOut', // Use a valid named easing
    },
  },
};


const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        backgroundColor: '#fff',
      }}
    >
      {/* Left Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        style={{ maxWidth: 550 }}
      >
        <Typography variant="body2" sx={{ color: '#d81b60', fontWeight: 600, mb: 1 }}>
          ➞ Welcome to <span style={{ color: '#d81b60' }}>NovaByte</span>
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>
          Impact the World <br /> by Taking Action
        </Typography>

        <Typography variant="body1" sx={{ color: '#555', mb: 4 }}>
          We design & develop cutting-edge software and hardware solutions to solve real-world problems and empower businesses with innovation.
        </Typography>

        <motion.div variants={fadeUp} custom={1}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d81b60',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': { backgroundColor: '#c2185b' },
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Section - Images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Box sx={{ display: 'flex', gap: 2, mt: { xs: 4, md: 0 } }}>
          <Stack spacing={2}>
            {[hero1, hero2].map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Hero ${idx + 1}`}
                width={120}
                height={120}
                style={{
                  borderRadius: 12,
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </Stack>
          <motion.img
            src={hero3}
            alt="Hero 3"
            width={200}
            height={260}
            style={{ borderRadius: 12, objectFit: 'cover' }}
            whileHover={{ scale: 1.05 }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;
