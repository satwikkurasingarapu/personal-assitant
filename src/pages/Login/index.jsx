import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./components/ForgotPassword";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";

import { BrandIcon } from "../../assets/icons/BrandIcon";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "350px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function LogIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <BrandIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
              fontWeight: 650,
            }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email" sx={{ marginBottom: 1, fontSize: 14 }}>
                Email
              </FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? "error" : "primary"}
                sx={{
                  backgroundColor: "#fdfcfc",
                  "& .MuiInputBase-root": {
                    height: 35,
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 14px",
                    fontSize: "0.875rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Change border radius
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    "& fieldset": {
                      borderColor: "#ced4da", // Default border color (light gray)
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(82,125,239,0.5)", // Light blue border color on focus
                      boxShadow: "0 0 0 0.15rem rgba(82,125,239,0.5)", // Light blue glow effect
                    },
                  },
                  // Optional: Adjust helper text color when there's an error
                }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel
                  htmlFor="password"
                  sx={{ marginBottom: 1, fontSize: 14 }}
                >
                  Password
                </FormLabel>
                <Link
                  component="button"
                  type="button"
                  onClick={handleClickOpen}
                  variant="body2"
                  sx={{
                    alignSelf: "baseline",
                    color: "#000000", // Change text color to black
                    textDecoration: "none", // Remove default underline
                    position: "relative", // Position relative to use pseudo-element
                    "&:hover": {
                      "&:after": {
                        content: '""', // Create a pseudo-element for the underline
                        position: "absolute", // Position absolutely
                        left: 0,
                        bottom: 0, // Align it to the bottom
                        height: "1px", // Height of the underline (thin)
                        width: "100%", // Full width on hover
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Light black color
                        transition: "width 0.3s ease", // Smooth transition effect
                      },
                    },
                    "&:after": {
                      content: '""', // Create the pseudo-element
                      position: "absolute", // Position absolutely
                      left: 0,
                      bottom: 0, // Align it to the bottom
                      height: "1px", // Height of the underline (thin)
                      width: "0%", // Initially set width to 0
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Light black color
                      transition: "width 0.3s ease", // Smooth transition effect
                    },
                  }}
                >
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? "error" : "primary"}
                sx={{
                  backgroundColor: "#fdfcfc",
                  "& .MuiInputBase-root": {
                    height: 35,
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 14px",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Change border radius
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    "& fieldset": {
                      borderColor: "#ced4da", // Default border color (light gray)
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(82,125,239,0.5)", // Light blue border color on focus
                      boxShadow: "0 0 0 0.15rem rgba(82,125,239,0.5)", // Light blue glow effect
                    },
                  },
                  // Optional: Adjust helper text color when there's an error
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: 14, // Label text size
                },
              }}
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              sx={{
                backgroundColor: "#2b3140", // Button background color
                color: "#ffffff", // Button text color
                "&:hover": {
                  backgroundColor: "#4a5568", // Hover background color
                },
                borderRadius: "8px", // Optional border radius
                fontSize: 14, // Change font size (set to your preference)
                padding: "6px 6px", // Optional: Adjust padding to fit the new font size
                textTransform: "none",
              }}
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: "center", fontSize: 14 }}>
              Don&apos;t have an account?{" "}
              <span>
                <Link
                  href="/material-ui/getting-started/templates/sign-in/"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  Sign up
                </Link>
              </span>
            </Typography>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Google")}
              startIcon={<GoogleIcon />}
              sx={{
                fontSize: 14,
                backgroundColor: "#fcfcfd",
                color: "#0c0f15",
                textTransform: "none",
                borderRadius: "8px", // Optional border radius
                borderColor: "#e6e9ee",
                padding: "6px 6px", // Optional: Adjust padding to fit the new font size
                "&:hover": {
                  backgroundColor: "#e6e9ee", // Background color on hover
                  borderColor: "#c2c7d0", // Border color on hover
                },
              }}
            >
              Sign in with Google
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
