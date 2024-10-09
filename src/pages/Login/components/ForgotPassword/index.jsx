import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Typography } from '@mui/material';

function ForgotPassword({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth // Ensures the dialog occupies the full width of its container
      maxWidth="sm" // Set maximum width for the dialog
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
        sx: {
          backgroundColor: "rgba(245, 246, 250, 0.98)", // Slightly transparent background
          backdropFilter: "blur(5px)", // Optional: Add blur effect
          borderRadius:"8px"

        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600, fontFamily: "sans-serif" }}>Reset password</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography sx={{ fontSize: 14 }}>
          Enter your account's email address, and we will send you a link to reset your password.
        </Typography>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          autoFocus
          required
          variant="outlined"
          fullWidth // Ensures the TextField occupies full width
          sx={{
            backgroundColor: "#fdfcfc",
            "& .MuiInputBase-root": {
              height: 35,
            },
            "& .MuiInputBase-input": {
              padding: "8px 6px",
              fontSize: "0.875rem",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              "& fieldset": {
                borderColor: "#ced4da", // Default border color (light gray)
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(82,125,239,0.5)", // Light blue border color on focus
                boxShadow: "0 0 0 0.15rem rgba(82,125,239,0.5)", // Light blue glow effect
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
      <Button
      type="button"
              onClick={handleClose}
              sx={{
                 // Button background color
                color: "#49546c", // Button text color
                "&:hover": {
                  backgroundColor: "rgba(73,84,108,0.1)", // Hover background color
                },
                borderRadius: "8px", // Optional border radius
                fontSize: 12, // Change font size (set to your preference)
                padding: "6px 10px", // Optional: Adjust padding to fit the new font size
                textTransform: "none",
              }}
            >
              Cancel
            </Button>

       
        <Button
              type="submit"
              
              variant="contained"
              sx={{
                backgroundColor: "#2b3140", // Button background color
                color: "#ffffff", // Button text color
                "&:hover": {
                  backgroundColor: "#4a5568", // Hover background color
                },
                borderRadius: "8px", // Optional border radius
                fontSize: 12, // Change font size (set to your preference)
                padding: "6px 16px", // Optional: Adjust padding to fit the new font size
                textTransform: "none",
              }}
            >
              Continue
            </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
