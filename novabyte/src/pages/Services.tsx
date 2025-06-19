import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const services = [
  {
    title: 'Business Strategy',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    title: 'UX/UI Design',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: 'App Development',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <DeveloperModeIcon fontSize="large" />,
  },
  {
    title: 'Business Strategy',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    title: 'UX/UI Design',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: 'App Development',
    description:
      'A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics',
    icon: <DeveloperModeIcon fontSize="large" />,
  },
];

const Services = () => {
  return (
    <Box sx={{ px: 6, py: 8, backgroundColor: '#fafafa' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '100%',
                sm: '48%',
                md: '32%',
              },
              mb: 4,
            }}
          >
            <Card
              sx={{
                textAlign: 'center',
                py: 4,
                px: 2,
                boxShadow: 3,
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#fce4ec',
                  width: 56,
                  height: 56,
                  margin: '0 auto',
                  mb: 2,
                }}
              >
                {service.icon}
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
