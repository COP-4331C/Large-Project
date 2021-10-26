import React, {useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from "@mui/material/InputLabel";
import {Alert, Collapse, FormHelperText} from "@mui/material";

// TODO: Remember me checkbox. If checked, the username should be auto populated
//       the nex time the user visits the page.

// TODO BUG: Text overflows the Paper container on a mobile device in landscape mode
//           Also, the Paper gets enlarged (too long) in tablets in portrait mode.
//           (avoid using a percentage for the height to avoid above issue).

// TODO BUG: The wrong credentials message and the minimum password length message
//           pushes components out of the way (Pushes them up or down). Try to avoid it.

export default function Login() {

  //***************************************** //
  //     Global Variables and constants
  //***************************************** //
  const MIN_PASSWORD_LENGTH = 8

  // Variable for password validation feedback to the user
  const [pwdError, setPwdError] = useState( {
    state: false,
    text: ""
    });

  // Email variable
  const [email, setEmail] = useState("");

  // Password variable and its state to show or not
  const [values, setValues] = useState({
    password:'',
    showPassword: false
  });

  // Variable to open and close the wrong credentials error message
  const [openMessage, setOpenMessage] = useState(false);


  // **************************************** //
  //           Helper Functions
  // **************************************** //

  // Toggles the show password button (eye icon)
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // Stores the password in the password variable
  const handleChangePasswordField = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Email and password length validation
  function validateInputLength() {
    return ((email.length > 0) && (values.password.length >= MIN_PASSWORD_LENGTH))
  }


  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  // Handles the submit button on click event
  function handleSubmitButton(event) {
    event.preventDefault();

    // Hide the wrong Credentials message
    setOpenMessage(false);

    setPwdError({
      state: false,
      text: ""
    });

    // If it passes validation, continue
    if (validateInputLength()) {

        const URL = 'http://localhost:5000/api/auth/login';
        const loginPayload = {
          email: email,
          password: values.password
        };

        // Sends the login credentials
        axios.post(URL, loginPayload)
          .then(function (response) { // .then is like the try in try and catch.
            alert("Login successful! Your access Token is: " + response.data.accessToken);
          })
          .catch(function (error) {
            // Show the wrong credentials message
            setOpenMessage(true);
          });

    // Length validation failed
    } else {
      // Email and password length of 0 is handled by html
      // Email format validation is partially handled by html
      // (it only requires at least a char before and after the @ sign)
      setPwdError({
        state: true,
        text: "Minimum password is 8 characters"
      });
    }
  }

  // **************************************** //
  //                  GUI
  // **************************************** //

  return (
    <Grid>
      <form onSubmit={handleSubmitButton}>
        <Paper elevation={3} style={{padding: 40, height: '50vh', width: 280, margin: '20px auto'}}>

          {/********************* Icon and title *********************/}
          <Grid align='center'>
            <Avatar style={{backgroundColor: '#0031FF'}}>
              <LockOutlinedIcon/>
            </Avatar>
            <h2>Sign in</h2>
          </Grid>

          {/********************* Wrong credentials message ******************** */}
          {/* (a hidden alert). Visible only with wrong credentials */}
          <Collapse in={openMessage}>
            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              <strong>Incorrect email or password.</strong>
            </Alert>
          </Collapse>

          {/********************* email Text Field *********************/}
          <TextField
            required
            fullWidth
            label="Email"
            placeholder="Enter email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />

          {/********************* Password field *********************/}
          <FormControl sx={{ margin: "16px 16px 0 0", width: "100%"  }} variant="standard" required error={pwdError.state}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChangePasswordField('password')}
              placeholder="Enter Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDown}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="component-error-text">{pwdError.text}</FormHelperText>
          </FormControl>

          {/********************* Remember me checkbox *********************/}
          <FormControlLabel
            control={
              <Checkbox color="primary" />}
            label="Remember me"
          />

          {/********************* Sign in button *********************/}
          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
            style={{ margin: '8px 0' }}
          >
            Sign in
          </Button>

          {/*********************  Forgot my password *********************/}
          <Typography>
            <Link
              href='#'
              underline='hover'
              color='primary'
              fontSize='0.9rem'
              marginY='20px'
            >
              Forgot my password
            </Link>
          </Typography>

          {/********************* No Account? Create one! *********************/}
          <Typography fontSize="0.9rem">No account?
            <Link href="#" underline="hover" color="primary" fontSize="0.9rem"> Create one!</Link>
          </Typography>

        </Paper>
      </form>
    </Grid>
  );
}