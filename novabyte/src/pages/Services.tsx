import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';



const services = [
  {
    title: 'Business Strategy',
    description:
      'Strategic planning that drives your business forward with clear goals and tactics.',
    icon: <BusinessIcon fontSize="large" />,
    color: '#e3f2fd',
  },
  {
    title: 'UX/UI Design',
    description:
      'Beautiful and functional designs tailored to your users and your brand.',
    icon: <DesignServicesIcon fontSize="large" />,
    color: '#f3e5f5',
  },
  {
    title: 'App Development',
    description:
      'Robust and scalable apps built with modern technologies and best practices.',
    icon: <DeveloperModeIcon fontSize="large" />,
    color: '#e8f5e9',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeInOut', // ✅ Use a string easing
    },
  },
};


const ServiceCard = ({
  title,
  description,
  icon,
  color,
  index,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Card
      sx={{
        textAlign: 'center',
        p: 3,
        borderRadius: 4,
        boxShadow: 4,
        height: '100%',
        transition: 'all 0.4s ease',
        border: '2px solid transparent',
        backgroundColor: '#fff',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          borderColor: color,
          backgroundColor: '#fefefe',
        },
      }}
    >
      <motion.div whileHover={{ rotate: 10 }}>
        <Avatar
          sx={{
            bgcolor: color,
            width: 60,
            height: 60,
            margin: '0 auto',
            mb: 2,
          }}
        >
          {icon}
        </Avatar>
      </motion.div>
      
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 10, backgroundColor: '#fafafa' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        mb={6}
        color={theme.palette.primary.main}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '45%', md: '30%' },
              minWidth: 280,
            }}
          >
            <ServiceCard {...service} index={index} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
