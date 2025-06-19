import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <Box sx={{ py: 10, px: 4, bgcolor: "#fff", color: "#111827" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" fontWeight={700} align="center" mb={1}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={6}
          >
            Need to speak with us directly? Call us on the given number. Our
            team is available Monday to Sunday.
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            {["Name", "Email", "Subject"].map((label, i) => (
              <TextField
                key={i}
                fullWidth
                label={label}
                variant="outlined"
                margin="normal"
                sx={{
                  backgroundColor: "#f9fafb",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            ))}

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#f9fafb",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.4,
                backgroundColor: "#ef4444",
                "&:hover": { backgroundColor: "#dc2626" },
                fontSize: "1rem",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <iframe
              title="Kapsi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.243524896206!2d79.1905903!3d21.1450265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7e424a677dd%3A0x3046064bb40f8b90!2sKapsi%20bk%2C%20Maharashtra%20440035!5e0!3m2!1sen!2sin!4v1718697222780!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
